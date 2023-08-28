import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import "./MovieDetails.css";

function MovieDetails() {
    const { movieId } = useParams(); 
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function fetchMovieDetails() {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieId}?api_key=183d4f8a2edee8568eff74008557417a`
                );
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        }
        fetchMovieDetails();
    }, [movieId]);

    if (!movie) {
        return null;
    }

    return (
        <div
            className="details"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="details_content">
                <h1 className="details_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className="details_buttons">
                    <button className="details_button">Play</button>
                </div>

                <h1 className="details_description">
                    {movie?.overview}
                </h1>
            </div>
        </div>
    );
}

export default MovieDetails;
