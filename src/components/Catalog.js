import React, { useEffect, useState } from "react";
import "./Catalog.css";
import Movie from "./Movie";
import MovieDetails from "./MovieDetails";

export default function Catalog({ title, callUrl }) {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

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
        scrollToTop(); 
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", 
        });
    };

    return (
        <div className="catalog">
            <MovieDetails movie={selectedMovie} />
            <h2 className="catalog_name">{title}</h2>
            <div className="catalog_movies">
                {movies.map((movie) => (
                    <Movie key={movie.id} movie={movie} onMovieClick={handleMovieClick} />
                ))}
            </div>
        </div>
    );
}
