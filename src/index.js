import React, { Fragment } from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./views/Home";

import store from "./store";

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Switch>
          <Route path="/" component={Home} exect />
          <Redirect to="/" />
        </Switch>
      </Fragment>
    </Router>
  </Provider>
);

render(<App />, document.getElementById("root"));
