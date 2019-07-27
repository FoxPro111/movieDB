import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Preloader from "../../components/UI/Preloader/Preloader";
import * as actions from "../../store/actions/index";

import MovieInfo from "../../components/MovieInfo/MovieInfo";

const Aside = styled.aside`
  padding: 20px;
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  background-color: #fff;
  width: 320px;
  overflow: auto;
  transition: 0.35s transform;
  transform: ${props => (!props.opened ? "translateX(100%)" : "none")};
`;

const Close = styled.span`
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  transform: scale(1.2, 0.8);
  z-index: 3;
  cursor: pointer;

  &::before {
    content: "X";
    display: inline-block;
  }
`;

const asidePanel = props => {
  let content = <Preloader />;
  let opened = false;

  if (props.currentMovie) {
    opened = true;

    content = <MovieInfo {...props.currentMovie} />;
  }

  if (props.loading) {
    content = <Preloader />;
  }

  if (props.error) {
    content = <div>{props.error}</div>;
  }

  return (
    <Aside opened={opened}>
      {content}
      <Close onClick={props.removeCurrentMovie} />
    </Aside>
  );
};

const mapStateToProps = state => {
  return {
    currentMovie: state.movie.currentMovies,
    loading: state.movie.loading,
    error: state.movie.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeCurrentMovie: () => dispatch(actions.selectMovieRemove())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(asidePanel);
