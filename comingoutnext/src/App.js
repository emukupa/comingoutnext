import React, { Component } from 'react';
import './App.css';
import { movies } from './data/movie-data';

import MovieCarousel from './components/Carousels/MovieCarousel';
import MoviesContent from './components/Content/MoviesContent';

const DEFAULT_ARRAY_INDEX = [0, 1, 2, 3];

class App extends Component {
  constructor() {
    super();
    this.state = {
      Movies: [],// [1,2,3,4,5,6,7,8,]
      CarouselMovies: [],// [3,6,1] //[2,5,0]
    }
    console.log(this.movieIndex())
  }

  movieIndex (...args){
    //TBD check if is array of Numbers
    const arr = Array.isArray(args[0]) ? args[0]: args;
    return args.length ? arr : DEFAULT_ARRAY_INDEX;
  } 

  componentDidMount() {
    const carouselMovies = this.movieIndex().map(pos => movies[pos]); // populating the CarousalMovies

    this.setState({
      Movies: movies,
      CarouselMovies: carouselMovies,
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <div className="App__Header">header</div>
        <div className="App__Content">
          <div>
            {this.state.CarouselMovies.map((Movie, index) => <MovieCarousel key={index} movie={Movie} />)}
          </div>
          <div>
            <MoviesContent />
          </div>
        </div>

        <div className="App__Footer"></div>
      </div>
    );
  }
}

export default App;
