import { getMovieById } from 'api';
import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import {
  Wrapper,
  Name,
  Genres,
  Info,
  Link,
  List,
  Image,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLink = location.state?.from ?? '/movies';

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

  return (
    <div>
      <Link to={backLink}>Go Back</Link>
      <Wrapper>
        <Image
          src={
            movie.poster_path === null
              ? `https://media.istockphoto.com/id/1216251206/vector/no-image-available-icon.jpg?s=612x612&w=0&k=20&c=6C0wzKp_NZgexxoECc8HD4jRpXATfcu__peSYecAwt0=`
              : `https://image.tmdb.org/t/p/w342/${movie.poster_path}`
          }
          alt={movie.title}
        />
        <Info>
          <Name>{movie.title}</Name>
          <Genres>
            Genres:{' '}
            {movie.genres?.length > 0
              ? movie.genres.map(genre => genre.name).join(', ')
              : '-'}
          </Genres>
          <p>{movie.overview}</p>
          <List>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </List>
        </Info>
      </Wrapper>

      <Outlet />
    </div>
  );
};
