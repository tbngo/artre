import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./screens/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact render={() => <div>About</div>} />
        <Route path="/" render={() => <div>404</div>} />
      </Switch>
    </Router>
  );
};

export default App;
