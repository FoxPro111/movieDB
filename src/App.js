import React, { useEffect } from "react";
import { connect } from 'react-redux';
import "./App.css";
import MoviesList from "./containers/MoviesList/MoviesList";
import FiltersPanel from "./containers/FiltersPanel/FiltersPanel";
// import axios from "./axios";
import { Route, Switch, withRouter } from "react-router-dom";

import * as actions from './store/actions/index';

import Layout from "./hoc/Layout/Layout";

const App = (props) => {
  useEffect(() => {
    props.onTryFetchGenre();
  }, []);

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/movies" component={MoviesList} />
          <Route path="/" exact component={FiltersPanel} />
        </Switch>
      </Layout>
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     isAuthenticated: !!state.auth.token
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    onTryFetchGenre: () => dispatch(actions.fetchGenre())
    // onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(null, mapDispatchToProps)(withRouter(App));
