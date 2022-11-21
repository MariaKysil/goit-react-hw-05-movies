import PropTypes from 'prop-types';
import { MovieView } from 'components/MovieView/MovieView';
import { MoviesWrapper } from './MoviesView.styled';

export const MoviesView = ({ movies }) => {
  return (
    <MoviesWrapper>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <MovieView
              id={movie.id}
              title={movie.title}
              poster={movie.poster_path}
            ></MovieView>
          </li>
        ))}
    </MoviesWrapper>
  );
};

MoviesView.propTypes = {
  movies: PropTypes.array,
};
