// followed https://www.youtube.com/watch?v=8QgQKRcAUvM&t=52s\
import React, { useRef, useState }from "react";
import "./Signup.scss";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";


export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup, currentUser } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError("Failed to create an account")
    }
    setLoading(false)
  }

  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      {currentUser && currentUser.email}
      {error && <div><h2>{error}</h2></div>}
      <div onSubmit={handleSubmit()}   className="inputs">
        <div className="input">
          <img src={email_icon} alt="" className="icons" />
          <input type="email" placeholder="email@gmail.com"ref={emailRef}/>
        </div>
        <div className="input">
          <img src={password_icon} alt="" className="icons"/>
          <input type="password" placeholder="Password" ref={passwordRef}/>
        </div>
        <div className="input">
          <img src={password_icon} alt="" className="icons" />
          <input type="password" placeholder="Password Confirm" ref={passwordConfirmRef}/>
        </div> 
      </div>
      <div onClick={handleSubmit()} >
        <Button disabled={loading} text={"Sign Up"}/>
      </div>
      <div className="forgot-password">
        Lost Password? <span> Click Here!</span>
      </div>

    </div>
  );
};
