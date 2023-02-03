/* eslint-disable no-unused-vars */
import { getMovieById } from 'api';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovie(id) {
      try {
        const data = await getMovieById(id);
        setMovie(data);
      } catch (error) {
        setError(error);
      }
    }

    fetchMovie(movieId);
  }, [movieId]);

  console.log(movie);

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
    </div>
  );
};
