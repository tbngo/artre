import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
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
          console.log(res.data);
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
      <UserContext.Provider value={user}>
        <Route path="/">
          <Home />
        </Route>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
