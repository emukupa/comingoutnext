import axios from 'axios';

//const URL = `https://jsonplaceholder.typicode.com/photos`;
const OMDBAPI_URL = `http://www.omdbapi.com`;
const API_KEY = `apikey=2f5c5c64`;
const search = `batman`;
const URL = `${OMDBAPI_URL}/?t=${search}&${API_KEY}`;

console.log(URL);

export const FETCHING = 'FETCHING',
  FETCHED = 'FETCHED',
  ERROR = 'ERROR';

export const getMovies = () => dispatch => {
  dispatch({ type: FETCHING });

  axios
    .get(URL)
    .then(response => response.data)
    .then(data => {
      const reducedData = data.filter(movie => movie.id < 10);
      dispatch({ type: FETCHED, movies: reducedData });
    })
    .catch(err => {
      dispatch({ type: ERROR, movieError: 'Could not get any movies' });
    });
};

// dispatch({ type: FETCHED, movies: response.data })
