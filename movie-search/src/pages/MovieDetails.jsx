import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";
import YouTube from "react-youtube";
import { apikey } from "../lib/api";

export default function MovieDetails() {
  const { id } = useParams();
  const { movies, setSelectedMovie, selectedMovie } = useContext(MovieContext);
  const [videoId, setVideoId] = useState("");
  const [loadingVideos, setLoadingVideos] = useState(true);
  const [loadingMovie, setLoadingMovie] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }
        const data = await response.json();
        setSelectedMovie(data);
        setLoadingMovie(false);
      } catch (error) {
        setError(error.message);
        setLoadingMovie(false);
      }
    };

    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apikey}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }
        const data = await response.json();
        const trailer = data.results.find((video) => video.type === "Trailer");
        setVideoId(trailer ? trailer.key : "");
      } catch (error) {
        setError(error.message);
      } finally {
        setLoadingVideos(false);
      }
    };

    fetchMovieDetails();
    fetchVideos();
  }, [id, setSelectedMovie]);

  if (loadingMovie) return <div>Loading movie details...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="movie-details">
      <h1>{selectedMovie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`}
        alt={`${selectedMovie.title} poster`}
        className="movie-poster"
      />
      <p>{selectedMovie.overview}</p>
      {loadingVideos ? (
        <p>Loading trailer...</p>
      ) : videoId ? (
        <YouTube videoId={videoId} className="youtube-video" />
      ) : (
        <p>No trailer available</p>
      )}
    </div>
  );
}
