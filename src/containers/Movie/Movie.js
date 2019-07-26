import React from "react";
import styled from 'styled-components';

const Movie = styled.div`
  max-width: 1024px;
  width: 90%;
  padding: 30px;
  margin: 0 auto 30px;
  border: 1px solid #ccc;
  background-color: #c6edff;
`;

const Heading = styled.h4`
  margin-top: 0;
  font-size: 18px;
  line-height: 1.2;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 15px;
  color: #484848;
  margin-top: 0;
  margin-bottom: 15px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #000;
  font-weight: 600;
`;

const movie = props => {
  const {
    title,
    vote_average,
    release_date,
    overview
  } = props;

  return (
  <Movie>
    <Heading>{title}</Heading>
    <Description>{overview}</Description>
    <Info>
      <span>{vote_average}</span>
      <span>{release_date}</span>
    </Info>
  </Movie>
  );
};

export default movie;
