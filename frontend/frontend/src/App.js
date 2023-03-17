import React, { useContext } from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Register";
import Home from "./components/Home";
import { Navigate } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const { auth } = useContext(AuthContext);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={auth ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!auth ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!auth ? <Signup /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
