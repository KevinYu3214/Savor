// followed https://www.youtube.com/watch?v=8QgQKRcAUvM&t=52s\
import React, { useState } from "react";
import "../global_styles/Signup.scss";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");

  const signUp = (e) => {
    e.preventDefault();

    setError("");
    if (password !== passwordCheck) {
      return setError("Passwords do not match");
    }

    signup(email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to create an account");
      });
  };

  return (
    <>
      <div className="lift"></div>
      {currentUser && <Navigate to="/account" />}
      <div className="container">
        <div className="header">
          <div className="stext">Sign Up</div>
          <div className="underline"></div>
        </div>
        {error && (
          <div className="error">
            <div className="error__text">{error}</div>
          </div>
        )}
        <form onSubmit={signUp} className="inputs">
          <div className="input">
            <img src={email_icon} alt="" className="icons" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="input">
            <img src={password_icon} alt="" className="icons" />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="input">
            <img src={password_icon} alt="" className="icons" />
            <input
              type="password"
              placeholder="Enter the same password"
              value={passwordCheck}
              onChange={(e) => setPasswordCheck(e.target.value)}
            ></input>
          </div>
          <button className="button" type="submit">Sign up</button>
        </form>
        <div className="page">
          Already have an account?{" "}
          <a href="/login">
            <div className="link">Log In</div>
          </a>
        </div>
      </div>
    </>
  );
};

export default SignUp;
