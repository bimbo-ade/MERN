import { useState } from "react";
import styled from "styled-components";

const FoodIngredients = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  return (
    <Div>
      <h1>My Food Items</h1>
      <div className="cont">
        <form className="create">
          <h3>Add a New Workout</h3>

          <label>Food Name</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />

          <label>kg:</label>
          <input
            type="number"
            onChange={(e) => setLoad(e.target.value)}
            value={load}
          />

          <button>Add Food</button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>

      <div className="workout-details">
        <h4>Food Name:{title}</h4>
        <p>
          <strong>In kilo (kg): </strong>
          {load}
        </p>
      </div>
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  margin-bottom: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .cont {
    text-align: center;
    height: auto;
    width: 390px;
    background-color: rgba(255, 255, 255, 0.13);
    border-radius: 10px;
    backdrop-filter: blur(4px);
    box-shadow: 0 0 3px rgba(8, 7, 16, 0.6);
    padding: 50px 35px;
  }
  input {
    height: 50px;
    width: 90%;
    padding: 0 10px;
    font-size: 1rem;
    margin: 0.7rem auto;
    outline: none;
    color: black;
    border: 1px solid gray;
    border-radius: 0.1rem;
  }
  button {
    background-color: #ff2156;
    color: white;
    border: 0;
    padding: 0.6rem 1.3rem;
    margin: 1rem 0;
  }
  h2 {
    // margin-top: 2rem;
    color: white;
  }
  p {
    padding-top: 0.3rem;
    font-size: 0.8rem;
  }
`;

export default FoodIngredients;
