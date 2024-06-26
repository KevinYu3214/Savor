import React, { useContext, useState } from 'react'
import Button from '../components/CustomButtons/Button';
import ipod from "../assets/ipod.svg"
import ThemeContext from '../contexts/ThemeContext';

const MainText = () => {
  const { theme } = useContext(ThemeContext); 

  return (
    <div className="main-text">
      Savor <span>your</span> taste today!
    </div>
  );
}

const Subtitle = () => {
  const { theme } = useContext(ThemeContext); 

  return (
    <div className="subtitle">
      Get tailored suggestions today based on your interests
    </div>
  );
}

function Home() {
  const { theme } = useContext(ThemeContext); // Get the theme from context

  const handleClick = () => {
    window.location.href = "/account";
  };

  return (
    <>
      <MainText />
      <Subtitle />
      <Button text={"Get Started"} onClick={handleClick}/>
      <div className="ipodContainer">
        <img src={ipod} alt="Description of the image" />
      </div>
 

    </>
  )
}

export default Home