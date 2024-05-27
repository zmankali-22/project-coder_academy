import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=db25bbd9e30527bb78ea20fc27439a28"
    );
    const data = await response.json();
    setMovies(data.results);
    console.log(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <MovieContext.Provider
      value={{ movies, selectedMovie, setSelectedMovie }}
    >
      {children}
    </MovieContext.Provider>
  );
};
