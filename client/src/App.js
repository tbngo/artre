import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const checkLoginStatus = () => {
    axios
      .get("http://localhost:5000/user", { withCredentials: true })
      .then((res) => {
        if (res.data && loggedIn === false) {
          setLoggedIn(true);
          setUser(res.data);
        }
      })
      .catch((err) => {
        console.err(err);
      });
  };

  useEffect(() => {
    checkLoginStatus();
  });

  return (
    <Router>
      <Route path="/">
        <Home />
      </Route>
    </Router>
  );
};

export default App;
