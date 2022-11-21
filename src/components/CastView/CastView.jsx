import PropTypes from 'prop-types';
import { Box } from 'Box';
import { Text } from './CastView.styled';
import errorImage from '../../images/not-found.png';

export const CastView = ({ cast: { profile_path, name, character } }) => {
  return (
    <Box mt={5}>
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500/${profile_path}`
            : errorImage
        }
        alt="an actor"
        width="250"
      />
      <p>
        <Text>Name:</Text> {name}
      </p>
      <p>
        <Text>Character:</Text> {character}
      </p>
    </Box>
  );
};

CastView.propTypes = {
  profile_path: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
};
