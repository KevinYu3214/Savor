// followed https://www.youtube.com/watch?v=8QgQKRcAUvM&t=52s\
import React, { useState } from "react";
import "../global_styles/Signup.scss";
import email_icon from "../assets/email.png";
import { useAuth } from "../contexts/AuthContext";
import icon from "../assets/savor-logo-jacob.png";
import { Navigate } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const { resetPassword, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const resetpassword = (e) => {
    e.preventDefault();

    setError("");
    setSent(false);

    resetPassword(email)
      .then((userCredential) => {
        console.log(userCredential);
        setSent(true);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to reset password");
      });
  };

  return (
    <>
        {currentUser && <Navigate to="/account" />}
        <div className="container">
            <div className="header">
                {!sent && <div className="stext">Reset Password</div>}
                {sent && <div className="stext">Email sent to your inbox!</div>}
                <div className="underline"></div>
            </div>
            {error && (
                <div className="error">
                    <div className="error__text">{error}</div>
                </div>
            )}
            <form onSubmit={resetpassword} className="inputs">
                {!sent && (
                    <div className="input">
                        <img src={email_icon} alt="" className="icons" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                    </div>
                )}
                {!sent && <button className="button" type="submit">Reset</button>}  
            </form>
            {sent && (
                <a className="reroute" href="/login">
                    <button className="button">Log in</button>
                </a>
            )}
            {!sent && (
                <div className="page">
                    Remembered your passsword?{" "}
                    <a href="/login">
                        <div className="link">Log In</div>
                    </a>
                </div>
            )}
        </div>
    </> 
    );
};

export default ResetPassword;