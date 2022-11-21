import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { AddInfoWrapper, StyledLink } from './AdditionalInfotmation.styled';

export const AdditionalInfotmation = () => {
  const location = useLocation();

  return (
    <>
      <h2>Additional information:</h2>
      <AddInfoWrapper>
        <li>
          <Suspense fallback={<Loader />}>
            <StyledLink to="cast" state={{ from: location.state?.from } ?? '/'}>
              Cast
            </StyledLink>
          </Suspense>
        </li>
        <li>
          <Suspense fallback={<Loader />}>
            <StyledLink
              to="reviews"
              state={{ from: location.state?.from } ?? '/'}
            >
              Reviews
            </StyledLink>
          </Suspense>
        </li>
      </AddInfoWrapper>
    </>
  );
};
