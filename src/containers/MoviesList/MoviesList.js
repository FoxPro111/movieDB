import React from "react";
import Movie from "../../components/Movie/Movie";
import Preloader from "../../components/UI/Preloader/Preloader";
import InfiniteScroll from "react-infinite-scroll-component";

import { connect } from "react-redux";

import * as actions from "../../store/actions/index";

const MoviesList = props => {
  let content = <Preloader ligth />;

  const onMovieChoose = id => {
    if (!(props.currentMovies && props.currentMovies.id === id)) {
      props.onMovieSelect(id);
    }
  };

  const fetchMoreData = () => {
    const query = [...props.query];
    query.push(`page=${props.nextPage}`);

    props.onFetchMoreMovies(query);
  };

  if (props.movies.length) {
    content = (
      <InfiniteScroll
        dataLength={props.movies.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {props.movies.map(movie => (
          <Movie key={movie.id} {...movie} click={onMovieChoose} />
        ))}
      </InfiniteScroll>
    );
  }

  return <div className="movies-list">{content}</div>;
};

const mapStateToProps = state => {
  return {
    movies: state.movies.movies,
    loadign: state.movies.loadign,
    error: state.movies.error,
    currentMovies: state.movie.currentMovies,
    query: state.movies.query,
    nextPage: state.movies.nextPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMovieSelect: id => dispatch(actions.selectMovie(id)),
    onFetchMoreMovies: query => dispatch(actions.fetchMoreMovies(query))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesList);
