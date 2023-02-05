import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/api';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data);
      } catch (error) {
        setError(error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <main>
      {movies && <MovieList movies={movies} />}
      {error && <p>Oops, something went wrong. Try again later</p>}
    </main>
  );
};

export default Home;
