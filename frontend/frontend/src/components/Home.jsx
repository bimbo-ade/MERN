import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

//accessing the global contex

const Home = () => {
  const { auth } = useContext(AuthContext);
  console.log(auth.email);

  return (
    <div>
      <h1>
        <strong>see this when you log in</strong>{" "}
      </h1>
      <h2> WELCOME BACK {auth.name}</h2>
    </div>
  );
};

export default Home;
