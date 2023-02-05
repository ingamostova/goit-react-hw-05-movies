import { Searchbox } from 'components/Searchbox/Searchbox';
import { useState, useEffect } from 'react';
import { getMoviesBySearch } from 'services/api';
import { MovieList } from 'components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const movieName = searchParams.get('query');

  useEffect(() => {
    async function fetchMoviesBySearch(query) {
      setMovies([]);
      setError(null);
      setIsLoading(true);
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
      } finally {
        setIsLoading(false);
      }
    }

    fetchMoviesBySearch(movieName);
  }, [movieName]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <main>
      <Searchbox onSubmit={handleSubmit} />
      {isLoading && (
        <div
          style={{
            textAlign: 'center',
            marginTop: '16px',
            marginBottom: '16px',
          }}
        >
          <RotatingLines strokeColor="grey" strokeWidth="3" width="77" />
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!isLoading && <MovieList movies={movies} />}
    </main>
  );
};

export default Movies;
