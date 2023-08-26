import React, { useState } from "react";
import "./Movie.css";
import { useNavigate } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";

const base_url = "https://image.tmdb.org/t/p/original/";


export default function Movie({ movie, onMovieClick, isUserCatalog }) {
    const navigate = useNavigate();

    const handleMovieClick = () => {
        if (isUserCatalog) {
            onMovieClick(movie);
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
               onClick={handleMovieClick}
           />
           <AiFillPlusCircle fontSize={30} id="addIcon"/>
       </div>
   );
}