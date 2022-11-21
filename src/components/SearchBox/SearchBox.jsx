import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, FormEl, Input } from './SearchBox.styled';

export const SearchBox = ({ setSearchParams, setIsLoading }) => {
  const [searchedMovie, setSearchedMovie] = useState('');

  const onInputChange = e => {
    const { value } = e.target;
    setSearchedMovie(value);
  };

  const onFormSubmit = e => {
    e.preventDefault();

    if (searchedMovie === '') {
      return toast.warn('Please enter a movie');
    }

    setSearchParams(
      searchedMovie !== '' ? { query: searchedMovie.trim() } : {}
    );

    setIsLoading(true);

    setSearchedMovie('');
  };

  return (
    <FormEl onSubmit={onFormSubmit}>
      <Input
        type="text"
        placeholder="Type a name of a movie"
        value={searchedMovie}
        onChange={onInputChange}
      ></Input>
      <Button type="submit">Search</Button>
    </FormEl>
  );
};

SearchBox.propTypes = {
  setSearchParams: PropTypes.func,
  setIsLoading: PropTypes.func,
};
