import React, { useEffect } from "react";
import { connect } from "react-redux";
import MoviesList from "./containers/MoviesList/MoviesList";
import FiltersPanel from "./containers/FiltersPanel/FiltersPanel";
import { Route, Switch, withRouter } from "react-router-dom";

import * as actions from "./store/actions/index";

import Layout from "./hoc/Layout/Layout";

const App = props => {
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
};

const mapDispatchToProps = dispatch => {
  return {
    onTryFetchGenre: () => dispatch(actions.fetchGenre())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(App));
