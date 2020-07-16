import React, { useEffect } from "react";

import { Router, Switch, Route } from "react-router-dom";
import { history } from "./components/helpers/history";

import Auth from "./components/Auth/Auth";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  useEffect(() => {
    // history.listen(((location, action) = {}));
  }, []);

  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/login" component={Auth}></Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
        </Switch>
      </Router>
      <p>Menu simples:</p>
      <ul>
        <li>
          <a onClick={() => history.push("/login")}>Login</a>
        </li>
        <li>
          <a onClick={() => history.push("/dashboard")}>Dashboard</a>
        </li>
      </ul>
    </div>
  );
};

export default App;
