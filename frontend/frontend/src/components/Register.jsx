import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <img src="/" alt="login" width={900} />
      <div className="overlay"></div>

      <div className="cont">
        <h2>Sign Up</h2>

        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Sign Up</button>
        <p>
          Already have an Account? <span> Login </span>
        </p>
      </div>
    </>
  );
};
export default Signup;
