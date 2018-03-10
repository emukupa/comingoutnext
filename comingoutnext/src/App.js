import React, { Component } from 'react';
import './App.css';
import { movies } from './data/movie-data';

import MovieCarousel from './components/Carousels/MovieCarousel';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Movies: [],
      CarouselMovies: [],
      MoviesIndex: [],
    }
  }

  movieChoice = (...args) => {
    this.setState({
      MoviesIndex: args
    });
  } 

  componentDidMount() {
    //console.log(this.state, 'before change state')
    // TBD pick the movies by date, for now, hard code them
    this.setState({
      Movies: movies,
    })

    //console.log(this.state, 'after change state')
  }
  render() {
    console.log(this.state.Movies)
    console.log('here');
    const len = this.state.Movies.length
    const carouselMovies =  this.movieChoice(4, len);
    console.log(carouselMovies);
    console.log(this.state.Movies)
    return (
      <div className="App">
        <div className="App__Header"></div>
        <div className="App__Content">
          <MovieCarousel />
          <div></div>
        </div>
        <div className="App__Footer"></div>
      </div>
    );
  }
}

export default App;
