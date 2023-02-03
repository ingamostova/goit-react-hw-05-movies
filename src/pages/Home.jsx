import { useState } from 'react';
import { useEffect } from 'react';
import { fetchTrendingMovies } from 'api';
import { MovieList } from 'components/MovieList';

export const Home = () => {
  const [error, setError] = useState();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchMovies();
  }, []);

  return (
    <main>
      <MovieList movies={movies} />
    </main>
  );
};
