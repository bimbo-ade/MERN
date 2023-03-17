import React, { useContext } from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Register";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import { Navigate } from "react-router-dom";
function App() {
  const { auth } = useContext(AuthContext);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            // if auth  go to HOME PAGE if no auth go to LOGIN PAGE
            element={<Home />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
