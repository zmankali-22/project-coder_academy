import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { Link } from "react-router-dom";

export default function Home() {
  // Accessing popularMovies from the context
  const { popularMovies } = useContext(MovieContext);

  return (
    <div className="home-container">
      <h2 className="home-title">Popular Movies</h2>
      <div className="movies-container">
        {popularMovies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <Link className="movie-link" to={`movies/${movie.id}`}>
              <img
                className="movie-poster"
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <h3 className="movie-title">{movie.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
