import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import { Link } from "react-router-dom";

export default function SearchResults() {
  const { movies, searchTerm } = useContext(MovieContext);

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchTerm.trim() !== "") {

        const results = movies.filter((movie) =>
          movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    } else {
        setSearchResults([]);
    }
  }, [movies, searchTerm]);

  return (
    <div>
      <h2>Search Results </h2>
      <div>
        {searchResults.map((searchResult) => (
          <div key={searchResult.id}>
            <Link to={`/movies/${searchResult.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w200${searchResult.poster_path}`}
                alt={searchResult.title}
              />
              <h3>{searchResult.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
