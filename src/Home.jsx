import React, { useState } from 'react'
import "./global_styles/index.scss";
import Header from "./components/Header";
import Button from './components/Button';
import musicImage from "./assets/ipod.svg";
import italy from "./assets/italy.svg";
import ipod from "./assets/ipod.svg";

function Home() {
  return (
    <>
      <Header />
      <maintext>
        Savor <span>your</span> taste today!
      </maintext>
      <subtitle>Get tailored suggestions today based on your interests</subtitle>
      <a href="/account">
        <Button text={"Get Started"} />
      </a>
      <div class="ipodContainer">
        <img src={ipod} alt="Description of the image" />
      </div>

    </>
  )
}

export default Home