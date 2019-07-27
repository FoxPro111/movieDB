import React from "react";
import styled from "styled-components";

const Runtime = styled.div`
  font-size: 13px;
  color: #fff;
  position: relative;
`;

const Time = styled.time`
  font-style: italic;
  font-weight: 600;
`;

const runtime = props => {
  let time = null;

  if (props.time) {
    let hours = Math.floor(props.time / 60);
    hours = hours > 10 ? hours : "0" + hours;

    let minutes = props.time % 60;
    minutes = minutes > 10 ? minutes : "0" + minutes;

    time = (
      <Runtime>
        Duration:{" "}
        <Time>
          {hours}:{minutes}
        </Time>
      </Runtime>
    );
  }

  return time;
};

export default runtime;
