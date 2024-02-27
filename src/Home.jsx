import React, { useState } from 'react'
import "./global_styles/index.scss";
import Header from "./components/Header";
import Button from './components/Button';
function Home() {
  return (
    <>
      <Header />
      <maintext>
        Savor <span>your</span> taste today!
      </maintext>
      <subtitle>Get tailored suggestions today based on your interests</subtitle>
      <a href="/signup">
        <Button text={"Get Started"} />
      </a>
    </>
  )
}

export default Home