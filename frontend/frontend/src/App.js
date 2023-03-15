import React, { useState, Navigate } from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Register";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [user, setUser] = useState(true);
  const [login, setLogin] = useState(true);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          {user ? (
            <>
              {" "}
              <Route
                path="/"
                element={login ? <Home /> : <Navigate to="/login" />}
              />
            </>
          ) : (
            <>
              {" "}
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
