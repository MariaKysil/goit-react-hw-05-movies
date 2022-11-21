import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'services/api';
import { MovieDetailCard } from 'components/MovieDetailCard/MovieDetailCard';
import { ErrorView } from 'components/ErrorView/ErrorView';
import { Loader } from 'components/Loader/Loader';
import { AdditionalInfotmation } from 'components/AdditionalInfotmation/AdditionalInfotmation';
import { Suspense } from 'react';
import { Link } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    getMovieDetails(movieId)
      .then(setMovieDetails)
      .catch(error => setError(error))
      .finally(setIsLoading(false));
  }, [movieId]);

  const { poster_path, title, vote_average, overview, genres } = movieDetails;
  const backLinkHref = location.state?.from ?? '/';
  return (
    <>
      {!error ? (
        <>
          <Link to={backLinkHref}>← Go back</Link>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <ul>
                <li>
                  <MovieDetailCard
                    poster={poster_path}
                    title={title}
                    vote={vote_average}
                    overview={overview}
                    genres={genres}
                  ></MovieDetailCard>
                </li>
              </ul>
              <AdditionalInfotmation></AdditionalInfotmation>
              <Suspense fallback={<Loader />}>
                <Outlet></Outlet>
              </Suspense>
            </>
          )}
        </>
      ) : (
        <ErrorView message={error?.message}></ErrorView>
      )}
    </>
  );
};

export default MovieDetails;
