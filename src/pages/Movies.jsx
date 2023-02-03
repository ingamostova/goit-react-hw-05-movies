/* eslint-disable no-unused-vars */
import { Searchbox } from 'components/Searchbox';
import { useState, useEffect } from 'react';
import { getMoviesBySearch } from 'api';
import { MovieList } from 'components/MovieList';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = query => {
    setSearchQuery(query);
  };

  useEffect(() => {
    async function fetchMoviesBySearch(query) {
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

  return (
    <main>
      <Searchbox onSubmit={handleSubmit} />
      <MovieList movies={movies} />
    </main>
  );
};
