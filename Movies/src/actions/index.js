import axios from 'axios';


const URL = `https://jsonplaceholder.typicode.com/posts/`;

export const 
    FETCHING    =   'FETCHING',
    FETCHED     =   'FETCHED',
    ERROR       =   'ERROR';

export const getMovies = () => dispatch => {
    dispatch({ type: FETCHING });
}
    
