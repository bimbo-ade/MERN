import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import FoodIngredients from "./FoodIngredients";

//accessing the global contex

const Home = () => {
  const { auth } = useContext(AuthContext);

  return (
    <div>
      <h2> WELCOME BACK {auth.name}</h2>
      
      <FoodIngredients />
    </div>
  );
};

export default Home;
