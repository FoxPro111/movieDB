import React from "react";
import Movie from "../Movie/Movie";

import { connect } from 'react-redux';

const MoviesList = props => {
  console.log(props.movies);

  let moviesList = '<p>No movies... Please, try search again.</p>';

  if (props.movies.length) {
    moviesList = props.movies.map(movie => (
      <Movie key={movie.id} {...movie} />
    ));
  }

  return (
    <div className="movies-list">
      {moviesList} 
    </div>
  );
};

const mapStateToProps = state => {
  return {
    movies: state.movies.movies
  }
}

// const mapDispatchToProps = dispatch => {

// }

export default connect(mapStateToProps)(MoviesList);
