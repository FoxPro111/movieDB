import React from "react";
import "./Preloader.scss";

const preloader = props => (
  <div className="caption">
    <div className="cube-loader">
      <div className="cube loader-1" />
      <div className="cube loader-2" />
      <div className="cube loader-4" />
      <div className="cube loader-3" />
    </div>
  </div>
);

export default preloader;
