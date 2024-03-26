import React, { useContext, useState } from 'react'
import Header from "./components/Header";
import Button from './components/CustomButtons/Button';
import musicImage from "./assets/ipod.svg";
import italy from "./assets/italy.svg";
import ipod from "./assets/ipod.svg";
import ThemeContext from './contexts/ThemeContext';

function Home() {
  const { theme } = useContext(ThemeContext); // Get the theme from context

  const handleClick = () => {
    window.location.href = "http://localhost:5173/account";
    console.log("Clicked the button");
  };

  return (
    <>
      <maintext>
        Savor <span>your</span> taste today!
      </maintext>
      <subtitle>Get tailored suggestions today based on your interests</subtitle>
      <Button text={"Get Started"} onClick={handleClick}/>
      <div class="ipodContainer">
        <img src={ipod} alt="Description of the image" />
      </div>
 

    </>
  )
}

export default Home