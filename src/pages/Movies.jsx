import { Searchbox } from 'components/Searchbox/Searchbox';
import { useState, useEffect } from 'react';
import { getMoviesBySearch } from 'api';
import { MovieList } from 'components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  // eslint-disable-next-line no-unused-vars
  const query = searchParams.get('query');

  useEffect(() => {
    async function fetchMoviesBySearch(query) {
      setMovies([]);
      setError(null);
      try {
        if (query === null) {
          return;
        }
        if (query.trim() === '') {
          throw new Error('Please enter correct movie name');
        }
        const data = await getMoviesBySearch(query);
        if (!data.length) {
          throw new Error(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
        }
        setMovies(data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchMoviesBySearch(searchQuery);
  }, [searchQuery]);

  const handleSubmit = query => {
    setSearchQuery(query);
    setSearchParams({ query });
  };

  return (
    <main>
      <Searchbox onSubmit={handleSubmit} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <MovieList movies={movies} />
    </main>
  );
};
