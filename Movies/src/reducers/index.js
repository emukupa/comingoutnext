import { FETCHING, FETCHED, ERROR} from '../actions'


const initState = {
    upcomingMovies: [],
    isFetching: false,
    isFetched: false,
    error: null,
}

export default (state = initState, action) => {
    switch(action.type) {
        case FETCHING: 
            return { ...state, isFetching: true };
        case FETCHED:
            return { ...state, isFetching: false, isFetched: true, upcomingMovies: action.movies };
        case ERROR: 
            return { ...state, error: action.movieError }
        default:
            return state;
    }
}