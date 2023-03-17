import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

//accessing the global contex

const Home = () => {
  const { auth } = useContext(AuthContext);
  console.log(auth.email);

  return (
    <div>
      <h2> WELCOME BACK {auth.name}</h2>
    </div>
  );
};

export default Home;
