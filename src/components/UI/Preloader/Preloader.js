import React from "react";
import styled from "styled-components";

const CubeLoader = styled.div`
  width: 73px;
  height: 73px;
  margin: 0 auto;
  position: relative;
  transform: rotateZ(45deg);
`;

const CubeFirst = styled.div`
  position: relative;
  transform: rotateZ(45deg);
  width: 50%;
  height: 50%;
  float: left;
  transform: scale(1.1);

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(52, 73, 94, 1);
    animation: cube-loader 2.76s infinite linear both;
    transform-origin: 100% 100%;
  }

  @keyframes cube-loader {
    0%,
    10% {
      transform: perspective(136px) rotateX(-180deg);
      opacity: 0;
    }

    25%,
    75% {
      transform: perspective(136px) rotateX(0deg);
      opacity: 1;
    }

    90%,
    100% {
      transform: perspective(136px) rotateY(180deg);
      opacity: 0;
    }
  }
`;

const CubeSecond = styled(CubeFirst)`
  transform: scale(1.1) rotateZ(90deg);

  &:before {
    animation-delay: 0.35s;
  }
`;

const CubeThird = styled(CubeFirst)`
  transform: scale(1.1) rotateZ(180deg);

  &:before {
    animation-delay: 0.69s;
  }
`;

const Cube4th = styled(CubeFirst)`
  transform: scale(1.1) rotateZ(270deg);

  &:before {
    animation-delay: 1.04s;
  }
`;

const preloader = () => (
  <CubeLoader>
    <CubeFirst />
    <CubeSecond />
    <CubeThird />
    <Cube4th />
  </CubeLoader>
);

export default preloader;
