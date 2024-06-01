import { createContext, useEffect, useState } from "react";
import { apikey } from "../lib/api";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  const fetchData = async (endpoint, setState) => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.themoviedb.org/3/${endpoint}&api_key=${apikey}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setState(data.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData('movie/popular?', setPopularMovies); // Fetch popular movies initially
  }, []);

  useEffect(() => {
    if (searchTerm) {
      fetchData(`search/movie?query=${encodeURIComponent(searchTerm)}`, setMovies);
    } else {
      setMovies(popularMovies); // Use popular movies as default or when search is cleared
    }
  }, [searchTerm, popularMovies]);

  return (
    <MovieContext.Provider
      value={{
        movies,
        selectedMovie,
        setSelectedMovie,
        popularMovies,
        searchTerm,
        setSearchTerm,
        loading,
        error,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
