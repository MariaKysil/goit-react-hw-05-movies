import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/api';
import { ErrorView } from 'components/ErrorView/ErrorView';
import { MoviesView } from 'components/MoviesView/MoviesView';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetchTrendingMovies()
      .then(setMovies)
      .catch(error => setError(error))
      .finally(setIsLoading(false));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {!error ? (
        <>
          {isLoading ? <Loader /> : <MoviesView movies={movies}></MoviesView>}
        </>
      ) : (
        <ErrorView message={error?.message}></ErrorView>
      )}
    </>
  );
};

export default Home;
