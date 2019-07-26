import React from "react";
import { NavLink } from "react-router-dom";

const Layout = props => {
  return (
    <div className="layout">
      <div className="nav-links">
        <NavLink to="/" exact activeClassName="active">
          home
        </NavLink>
        <NavLink to="/movies" activeClassName="active">
          movies
        </NavLink>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default Layout;
