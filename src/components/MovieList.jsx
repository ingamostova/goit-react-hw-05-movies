/* eslint-disable no-unused-vars */
import { Link, NavLink } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <NavLink to={`/movies/${movie.id}`}>
            <h3>{movie.title}</h3>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
