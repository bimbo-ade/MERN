import React, { useState, Navigate } from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Register";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [user, setUser] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />

          <Route
            path="login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
