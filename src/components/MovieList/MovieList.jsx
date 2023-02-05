import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, Item, Image, Title, Link } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(movie => (
        <Item key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <Image
              src={
                movie.poster_path === null
                  ? `https://media.istockphoto.com/id/1216251206/vector/no-image-available-icon.jpg?s=612x612&w=0&k=20&c=6C0wzKp_NZgexxoECc8HD4jRpXATfcu__peSYecAwt0=`
                  : `https://image.tmdb.org/t/p/w342/${movie.poster_path}`
              }
              alt={movie.title}
            />
            <Title>{movie.title}</Title>
          </Link>
        </Item>
      ))}
    </List>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
