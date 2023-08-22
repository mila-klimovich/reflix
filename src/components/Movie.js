import './Movie.css';

const base_url = "https://image.tmdb.org/t/p/original/";

export default function Movie({ movie, onMovieClick }) {

    const handleMovieClick = () => {
        onMovieClick(movie);
    };

    return (
        <img
            className="catalog_poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
            onClick={handleMovieClick}
        />
    );
}
