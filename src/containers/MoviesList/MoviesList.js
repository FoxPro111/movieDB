import React from "react";
import Movie from "../../components/Movie/Movie";
import Preloader from "../../components/UI/Preloader/Preloader";

import { connect } from "react-redux";

import * as actions from "../../store/actions/index";

const MoviesList = props => {
  let content = <Preloader ligth />;

  const onMovieChoose = id => {
    if (!(props.currentMovies && props.currentMovies.id === id)) {
      props.onMovieSelect(id);
    }
  };

  if (props.movies.length) {
    content = props.movies.map(movie => (
      <Movie key={movie.id} {...movie} click={onMovieChoose} />
    ));
  }

  return <div className="movies-list">{content}</div>;
};

const mapStateToProps = state => {
  return {
    movies: state.movies.movies,
    loadign: state.movies.loadign,
    error: state.movies.error,
    currentMovies: state.movie.currentMovies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMovieSelect: id => dispatch(actions.selectMovie(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesList);
