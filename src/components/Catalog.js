import React, { useEffect, useState } from "react";
import "./Catalog.css";
import Movie from "./Movie";
import MovieDetails from "./MovieDetails";
import { useLocation } from "react-router-dom"; 

export default function Catalog({ title, callUrl }) {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const location = useLocation();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(callUrl);
                const data = await response.json();
                setMovies(data.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, [callUrl]);

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
    };

    return (
        <div className="catalog">
            {location.pathname.includes("/catalog/user/") && selectedMovie && (
                <MovieDetails movie={selectedMovie} />
            )}
            <h2 className="catalog_name">{title}</h2>
            <div className="catalog_movies">
                {movies.map((movie) => (
                    <Movie
                        key={movie.id}
                        movie={movie}
                        onMovieClick={handleMovieClick}
                    />
                ))}
            </div>
            {selectedMovie && <MovieDetails movie={selectedMovie} />}{" "}
            {/* Conditionally render MovieDetails */}
        </div>
    );
}