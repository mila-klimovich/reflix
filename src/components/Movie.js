import React from "react";
import "./Movie.css";
import { useNavigate } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";

const base_url = "https://image.tmdb.org/t/p/original/";

export default function Movie({ movie, onMovieClick, isUserCatalog, onRentedMoviesChange }) {
    const navigate = useNavigate();

    const handleMovieClick = (addIconClicked) => {
        if (isUserCatalog) {
            onMovieClick(movie);
        } else if (addIconClicked) {
            const selectedUser = JSON.parse(
                localStorage.getItem("selectedUser")
            );

            if (selectedUser) {
                const updatedUser = {
                    ...selectedUser,
                    rentedMovies: [...selectedUser.rentedMovies, movie],
                };

                localStorage.setItem(
                    "selectedUser",
                    JSON.stringify(updatedUser)
                );
                onRentedMoviesChange(updatedUser); // Call the callback
            }
        } else {
            navigate(`/movie/${movie.id}`);
        }
    };

    return (
        <div className="movie-wrapper">
            <img
                className="catalog_poster"
                src={`${base_url}${movie.poster_path}`}
                alt={movie.name}
                onClick={() => handleMovieClick(false)}
            />
            <AiFillPlusCircle
                fontSize={30}
                id="addIcon"
                onClick={() => handleMovieClick(true)}
            />
        </div>
    );
}