import React from "react";
import styled from "styled-components";
import {connect} from 'react-redux';
import Preloader from '../../components/UI/Preloader/Preloader';

import Runtime from '../../components/Runtime/Runtime';

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
  transform: ${props => !props.opened ? 'translateX(100%)' : 'none'};
`;

const Title = styled.h2`
  font-size: 20px;
  color: #fff;
  text-transform: none;
  margin-top: 0;
  margin-bottom: 15px;
  position: relative;
`;

const OriginaTitle = styled.h5`
  font-size: 12px;
  color: #fff;
  opacity: 0.8;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 15px;
  position: relative;
`;

const Overview = styled.p`
  font-size: 13px;
  color: #fff;
  opacity: 0.8;
  margin-top: 0;
  margin-bottom: 15px;
  position: relative;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #fff;
  font-weight: 600;
  position: relative;
`;

const Poster = styled.img.attrs({src: props => props.src})`
  max-width: 100%;
  height: auto;
  margin-top: 15px;
  position: relative;
`;

const Backdrop = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${props => props.image ? props.image : ''});
  background-size: cover;
  background-position: 50%;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.75);
`;

const Genres = styled.div`
  font-size: 13px;
  color: #fff;
  opacity: 0.8;
`;

const asidePanel = props => {
  let content = <Preloader />; 
  let opened = false;

  if (props.currentMovie) {
    opened = true;

    const {
      title,
      overview,
      original_title,
      vote_average,
      release_date,
      genres,
      poster_path,
      runtime,
      backdrop_path
    } = props.currentMovie;

    let poster = null;

    if (poster_path) {
      const poster_src = `https://image.tmdb.org/t/p/w500${poster_path}`;

      poster = <Poster src={poster_src} />;
    }

    let backdrop = null;

    if (backdrop_path) {
      const backdrop_src = `https://image.tmdb.org/t/p/original${backdrop_path}`;

      backdrop = <Backdrop image={backdrop_src} />;
    }

    let genres_out = null;

    if (genres) {
      genres_out = <Genres>{genres.map(genre => {
        return genre.name;
      }).join(', ')}</Genres>
    }

    content = (<React.Fragment>
      {backdrop}
      <Overlay />
      <Title>{title}</Title>
      <OriginaTitle>{original_title}</OriginaTitle>
      <Overview>{overview}</Overview>
      <Info>
        <span>{vote_average}</span>
        <span>{release_date}</span>
      </Info>
      {poster}
      {genres_out}
      <Runtime time={runtime} />
    </React.Fragment>);
  }

  if (props.loading) {
    content = <Preloader />; 
  }

  if (props.error) {
    content = <div>{props.error}</div>; 
  }

  return <Aside opened={opened}>
    {content}
  </Aside>;
};

const mapStateToProps = state => {
  return {
    currentMovie: state.movie.currentMovies,
    loading: state.movie.loading,
    error: state.movie.error
  }
}

export default connect(mapStateToProps)(asidePanel);
