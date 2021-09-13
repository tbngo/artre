import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { useState } from "react";
import Axios from "axios";

const Home = () => {
  const [userData, setUserData] = useState(null);
  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/user",
    }).then((res) => {
      setUserData(res.data);
      console.log(res.data);
    });
  };
  return (
    <div>
      <Navbar />
      <Header />
      <button onClick={getUser}>Get User</button>
      {userData ? <h1>{userData.username}</h1> : null}
    </div>
  );
};

export default Home;
