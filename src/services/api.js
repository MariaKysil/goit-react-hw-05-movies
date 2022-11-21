import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f295e5cfae9c135f6b0e3c499a4f507f';

axios.defaults.baseURL = BASE_URL;
// axios.defaults.headers.common['Authorization'] = API_KEY'

export async function fetchTrendingMovies() {
  const { data } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return data.results;
}

export async function searchMovie(query) {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}`
  );
  //   console.log(data.results);
  return data.results;
}

export async function getMovieDetails(movieId) {
  const { data } = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return data;
}

export async function getMovieCredits(movieId) {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return data.cast;
}

export async function getMovieReviews(movieId) {
  const { data } = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return data.results;
}
