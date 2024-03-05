// followed https://www.youtube.com/watch?v=8QgQKRcAUvM&t=52s\
import React, { useRef, useState }from "react";
import "./Signup.scss";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import { useAuth } from "../contexts/AuthContext";
import Button from "../components/CustomButtons/Button";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useAuth()

  const signUp = (e) => {
    e.preventDefault();
    signup(email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
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
        <button className="button" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
