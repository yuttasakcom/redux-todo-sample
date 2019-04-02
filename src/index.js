import "@babel/polyfill";
import React from "react";
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
      <Switch>
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </Provider>
);

render(<App />, document.getElementById("root"));
