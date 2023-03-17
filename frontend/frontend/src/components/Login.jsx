import React, { useState, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!password || !email) {
        return setErr("all fields must be filled");
      }

      setErr(null);
      const response = await axios.post(
        "/api/user/login",
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        }
      );

      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/");
      console.log(response.data);
      const token = response?.data?.token;
      const id = response?.data?._id;
      const name = response?.data?.name;

      //directly sends the user detailes to the global contex
      setAuth({ id, name, email, password, token });
      setEmail("");
      setPassword("");
    } catch (err) {
      setErr(err.response.data.message);
      console.log(err);
    }
  };
  if (auth.token) {
    return <Navigate to="/" replace />;
  }
  return (
    <Div>
      <img src="/" alt="login" width={900} />
      <div className="overlay"></div>

      <div className="cont">
        <h2>Login </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Login </button>
          <p> {err}</p>
        </form>
        <p>
          Already have an Account? <span> Signup </span>
        </p>
      </div>
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  position: relative;
  color: white;

  .overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
  .cont {
    text-align: center;
    height: auto;
    width: 390px;
    background-color: rgba(255, 255, 255, 0.13);
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(4px);
    box-shadow: 0 0 3px rgba(8, 7, 16, 0.6);
    padding: 50px 35px;
    z-index: 3;
  }
  input {
    height: 50px;
    width: 90%;
    padding: 0 10px;
    font-size: 1rem;
    margin: 1rem auto;
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
    color: white;
    padding-top: 0.3rem;
    font-size: 0.8rem;
  }
`;
export default Login;
