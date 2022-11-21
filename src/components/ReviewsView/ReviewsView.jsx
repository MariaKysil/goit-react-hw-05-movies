import PropTypes from 'prop-types';
import { Box } from 'Box';

export const ReviewsView = ({ author, content }) => {
  return (
    <Box mt={5}>
      <h4>{author}</h4>
      <p>{content}</p>
    </Box>
  );
};

ReviewsView.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
};
