import { CastView } from 'components/CastView/CastView';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/api';
import { CastWrapper } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(setCast);
  }, [movieId]);

  return (
    <CastWrapper>
      {cast.map(cast => (
        <li key={cast.id}>
          <CastView cast={cast}></CastView>
        </li>
      ))}
    </CastWrapper>
  );
};

export default Cast;
