import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { Link } from "react-router-dom";

export default function Home() {
  const { movies } = useContext(MovieContext);
  return (
    <div>
      <h2>Popular Movies</h2>
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <Link to={`movies/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}/>
              <h3>{movie.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
