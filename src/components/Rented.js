import React from "react";
import "./Rented.css";
import { AiFillMinusCircle } from "react-icons/ai";

const base_url = "https://image.tmdb.org/t/p/original/";

function Rented({ movies, onRemoveMovie }) {
    return (
        <div className="rented_movies">
            {movies.map((movie) => (
                <div className="movie-wrapper" key={movie.id}>
                    <img
                        className="catalog_poster"
                        src={`${base_url}${movie.poster_path}`}
                        alt={movie.name}
                    />
                    <AiFillMinusCircle
                        fontSize={30}
                        id="removeIcon"
                        onClick={() => onRemoveMovie(movie.id)}
                    />
                </div>
            ))}
        </div>
    );
}

export default Rented;
