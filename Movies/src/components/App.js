import React from 'react';
import { connect }  from 'react-redux';

import { getMovies } from '../actions'
import Header from './header'
import Content from './content';
import Footer from './footer';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  };

  componentDidMount() {
    this.props.getMovies();
  };
};

const mapStateToProps = ({ upcomingMovies }) => {
  return {
    upcomingMovies,
  };
};

export default connect(mapStateToProps, { getMovies })(App);
