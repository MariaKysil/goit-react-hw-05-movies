import PropTypes from 'prop-types';
import errorImage from '../../images/not-found.png';
import { TextWrapper, Wrapper } from './MovieDetailCard.styled';

export const MovieDetailCard = ({ poster, title, vote, overview, genres }) => {
  return (
    <Wrapper>
      <div>
        <img
          src={
            poster ? `https://image.tmdb.org/t/p/w500/${poster}` : errorImage
          }
          alt={title}
          width="250"
        />
      </div>

      <TextWrapper>
        <h2>{title}</h2>
        <p>
          <span>User Score:</span> {vote}
        </p>
        <p>
          <span>Overview:</span> {overview}
        </p>
        <ul>
          <span>Genres:</span>
          {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
        </ul>
      </TextWrapper>
    </Wrapper>
  );
};

MovieDetailCard.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  vote: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
};
