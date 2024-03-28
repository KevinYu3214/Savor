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
      <div className="container">
        <div className="header">
          <div className="stext">Log In!</div>
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
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div> 
          <div className="page">
            <div className="page__text">
              Forgot your password? <a href="/resetpassword">
                <div className="link">Reset password</div>
              </a>
            </div>
          </div>
          <button className="button" type="submit">Log in</button>
        </form>
        <div className="page">
          <div className="page__text">
            Don't have an account? <a href="/signup"><div className="link">Sign Up</div></a>
          </div>
        </div>
        <div className="space"></div>
      </div>
    </>
  );
};

export default LogIn;