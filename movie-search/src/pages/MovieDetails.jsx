import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";

import YouTube from "react-youtube";

export default function MovieDetails() {
  const { id } = useParams();
  const { movies, setSelectedMovie, selectedMovie } =
    useContext(MovieContext);
  const [videoId, setVideoId] = useState("");
  const [loadingVideos, setLoadingVideos] = useState(true);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=db25bbd9e30527bb78ea20fc27439a28`
        );
        const data = await response.json();
        const trailer = data.results.find(
          (video) => video.type === "Trailer"
        );
        setVideoId(trailer ? trailer.key : "");
        setLoadingVideos(false); 
      } catch (error) {
        console.error("Failed to fetch videos", error);
        setLoadingVideos(false); 
      }
    };

    const foundMovie = movies.find(
      (movie) => movie.id === parseInt(id)
    );

    setSelectedMovie(foundMovie);
    getVideos();
  }, [id, movies, setSelectedMovie]);

  if (!selectedMovie) return <div>Loading...</div>;

  return (
    <div className="movie-details">
      <h1>{selectedMovie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`}
      />
      <p>{selectedMovie.overview}</p>
      {videoId ? (
        <YouTube videoId={videoId} className="youtube-video" />
      ) : (
        <p>No trailer available</p>
      )}
    </div>
  );
}
