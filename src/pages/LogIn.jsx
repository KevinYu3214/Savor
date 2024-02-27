// followed https://www.youtube.com/watch?v=8QgQKRcAUvM&t=52s\
import React, { useState }from "react";
import "../global_styles/Signup.scss";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import { useAuth } from "../contexts/AuthContext";


const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");

  const signUp = (e) => {
    e.preventDefault();

    login(email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      {error && 
        <div className="error">
          <div className="error__text">{error}</div>
        </div>
      }
      <div className="forgot-password">{currentUser.email}</div>
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
            className="input"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div> 
        <div className="forgot-password">Forgot your password? <span>Reset password</span></div>
        <button className="button" type="submit">Create Account</button>
      </form>
      <div className="forgot-password">
        Don't have an account? <span>Sign Up</span>
      </div>
    </div>
  );
};

export default LogIn;