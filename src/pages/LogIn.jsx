import React, { useState }from "react";
import "../global_styles/Signup.scss";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import { useAuth } from "../contexts/AuthContext";
import icon from "../assets/savor-logo-jacob.png"
import { Navigate } from "react-router-dom";


const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");

  const logIn = (e) => {
    e.preventDefault();

    setError("")

    login(email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((err) => {setError("Failed to login")
      });
  };

  return (
    <>
      {currentUser && < Navigate to='/account'/>}
      <a href="/"><img src={icon} className="icon" alt=""/></a>
      <div className="container">
        <div className="header">
          <div className="text">Log In</div>
          <div className="underline"></div>
        </div>
        {error && 
          <div className="error">
            <div className="error__text">{error}</div>
          </div>
        }
        <form onSubmit={logIn} className="inputs">
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
          <div className="page">
            <div className="page__text">
              Forgot your password? <a href="/account"><span>Reset password</span></a>
            </div>
          </div>
          <button className="button" type="submit">Log in</button>
        </form>
        <div className="page">
          <div className="page__text">
            Don't have an account? <a href="/signup"><span>Sign Up</span></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;