// followed https://www.youtube.com/watch?v=8QgQKRcAUvM&t=52s\
import React from "react";
import "./LoginSignup.scss";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";

const LoginSignup = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="" className="icons" />
          <input type="email" placeholder="email@gmail.com" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" className="icons" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="forgot-password">
        Lost Password? <span> Click Here!</span>
      </div>
      <div className="submit-container"></div>
      <div className="submit">Sign Up</div>
      <div className="submit">Login</div>
    </div>
  );
};
export default LoginSignup;
