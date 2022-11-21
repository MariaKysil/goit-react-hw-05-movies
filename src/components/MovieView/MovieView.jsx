import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import { Box } from 'Box';
import { Title } from 'components/MovieView/MovieView.styled';
import errorImage from '../../images/not-found.png';

export const MovieView = ({ id, poster, title }) => {
  const location = useLocation();

  return (
    <>
      <NavLink to={`/movies/${id}`} state={{ from: location }}>
        <Box
          display="flex"
          flexDirection="column"
          flexWrap="wrap"
          alignItems="center"
        >
          <img
            src={
              poster ? `https://image.tmdb.org/t/p/w500/${poster}` : errorImage
            }
            alt="poster"
            width="320"
            height="400"
            style={{ objectFit: 'cover' }}
          />
          <Title>{title}</Title>
        </Box>
      </NavLink>
    </>
  );
};

MovieView.propTypes = {
  id: PropTypes.number,
  poster: PropTypes.string,
  title: PropTypes.string,
};
