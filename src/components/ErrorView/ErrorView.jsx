import PropTypes from 'prop-types';
import errorImage from '../../images/error.jpg';

export const ErrorView = ({ message }) => {
  return (
    <div role="alert">
      <img src={errorImage} alt="sad cat" width="240" />
      <h2>Sorry, something went wrong</h2>
      <p>{message}</p>
    </div>
  );
};

ErrorView.propTypes = {
  message: PropTypes.string,
};
