import React, { useEffect, useState } from "react";
import "./Catalog.css";
import Movie from "./Movie";
import MovieDetails from "./MovieDetails";
import { useLocation } from "react-router-dom";
import Rented from "./Rented";
import Modal from "./Modal";

export default function Catalog({ title, callUrl }) {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null); 
    const location = useLocation();
    const [modalOpened, setModalOpened] = useState(false);
    const [lastRented, setLastRented] = useState(null);

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

        const storedUser = JSON.parse(localStorage.getItem("selectedUser"));
        setSelectedUser(storedUser);

        const handleStorageChange = (event) => {
            if (event.key === "selectedUser") {
                setSelectedUser(JSON.parse(event.newValue));
            }
        };

        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, [callUrl]);

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
    };

    const handleRentedMoviesChange = (updatedUser) => {
        setSelectedUser(updatedUser);
    };

    const handleRemoveMovieFromRented = (movieId) => {
        const updatedUser = { ...selectedUser };
        updatedUser.rentedMovies = updatedUser.rentedMovies.filter(
            (movie) => movie.id !== movieId
        );
        localStorage.setItem("selectedUser", JSON.stringify(updatedUser));
        setSelectedUser(updatedUser); 
    };

    return (
        <div className="catalog">
            {location.pathname.includes("/catalog/user/") && selectedMovie && (
                <MovieDetails movie={selectedMovie} />
            )}
            <h2 className="catalog_name">Rented movies</h2>
            {selectedUser && selectedUser.rentedMovies.length > 0 && (
                <Rented
                    movies={selectedUser.rentedMovies}
                    onRemoveMovie={handleRemoveMovieFromRented}
                />
            )}
            {modalOpened && (
                <Modal modalClosed={setModalOpened} lastRented={lastRented} />
            )}
            <h2 className="catalog_name">{title}</h2>
            <div className="catalog_movies">
                {movies.map((movie) => (
                    <Movie
                        key={movie.id}
                        movie={movie}
                        onMovieClick={handleMovieClick}
                        onRentedMoviesChange={handleRentedMoviesChange}
                        setModalOpened={setModalOpened}
                        setLastRented={setLastRented}
                    />
                ))}
            </div>
            {selectedMovie && <MovieDetails movie={selectedMovie} />}
        </div>
    );
}
