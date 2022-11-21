import { ErrorView } from 'components/ErrorView/ErrorView';
import { Loader } from 'components/Loader/Loader';
import { MoviesView } from 'components/MoviesView/MoviesView';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { Link } from 'pages/MovieDetails/MovieDetails.styled';
import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { searchMovie } from 'services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [nothingWasFound, setNothingWasFound] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  const location = useLocation();

  useEffect(() => {
    if (!movieName) {
      return;
    }

    searchMovie(movieName)
      .then(response => {
        setMovies(response);
        if (response.length === 0) {
          setNothingWasFound(true);
        }
      })
      .catch(error => setError(error))
      .finally(setIsLoading(false));
  }, [movieName]);

  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      {!error ? (
        <>
          <Link to={backLinkHref}>← Go back</Link>
          <SearchBox
            setSearchParams={setSearchParams}
            setIsLoading={setIsLoading}
          ></SearchBox>
          <MoviesView movies={movies}></MoviesView>

          {nothingWasFound && (
            <p>Nothing was found 😢 Please try to enter something else.</p>
          )}

          {isLoading && <Loader />}
        </>
      ) : (
        <ErrorView message={error?.message}></ErrorView>
      )}
    </>
  );
};

export default Movies;
