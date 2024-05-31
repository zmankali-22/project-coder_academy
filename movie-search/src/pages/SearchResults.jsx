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
    <div className="search-results-container">
      <h2 className="search-results-title">Search Results </h2>
      <div className= "search-results-movies-container">
        {searchResults.map((searchResult) => (
          <div className="search-result-card" key={searchResult.id}>
            <Link className="search-result-link" to={`/movies/${searchResult.id}`}>
              <img className="search-result-poster"
                src={`https://image.tmdb.org/t/p/w200${searchResult.poster_path}`}
                alt={searchResult.title}
              />
              <h3 className="search-result-title">{searchResult.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
