import { getMovieById } from 'services/api';
import { useEffect, useState } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import {
  Wrapper,
  Name,
  Genres,
  Info,
  Link,
  List,
  Image,
  BackBtn,
  Error,
  Layout,
} from './MovieDetails.styled';
import { BsArrowLeft } from 'react-icons/bs';
import { RotatingLines } from 'react-loader-spinner';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLink = location.state?.from ?? '/movies';

  useEffect(() => {
    async function fetchMovie(id) {
      setIsLoading(true);
      try {
        const data = await getMovieById(id);
        setMovie(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovie(movieId);
  }, [movieId]);

  return (
    <>
      {!isLoading && (
        <div>
          <BackBtn to={backLink}>
            <BsArrowLeft />
            Go Back
          </BackBtn>
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
                  <Link to="cast" state={{ from: backLink }}>
                    Cast
                  </Link>
                </li>
                <li>
                  <Link to="reviews" state={{ from: backLink }}>
                    Reviews
                  </Link>
                </li>
              </List>
            </Info>
          </Wrapper>

          <Suspense
            fallback={
              <Layout>
                <RotatingLines strokeColor="grey" strokeWidth="3" width="32" />
              </Layout>
            }
          >
            <Outlet />
          </Suspense>
        </div>
      )}

      {isLoading && (
        <Layout>
          <RotatingLines strokeColor="grey" strokeWidth="3" width="77" />
        </Layout>
      )}

      {error && <Error>{error}</Error>}
    </>
  );
};

export default MovieDetails;
