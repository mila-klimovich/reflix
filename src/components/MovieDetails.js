import React from "react";
import "./MovieDetails.css";

function MovieDetails({movie}) {

  if(!movie) {
    return null;
  }
  
  function shorten(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
 }

  return (
      <div
          className="details"
          style={{
              backgroundSize: "cover",
              backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
              backgroundPosition: "center center",
          }}
      >
          <div className="details_content">
              <h1 className="details_title">
                  {movie?.title || movie?.name || movie?.original_name}
              </h1>

              <div className="details_buttons">
                  <button className="details_button">Play</button>
                  <button className="details_button">Rent</button>
              </div>

              <h1 className="details_description">
                  {shorten(movie?.overview, 200)}
              </h1>
          </div>
          <div className="details_shade"></div>
      </div>
  );
}

export default MovieDetails;