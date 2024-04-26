import React, { useState, useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
const Button = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const { theme } = useContext(ThemeContext);

  const handleClick = () => {
    setIsClicked(true);

    // Wait for the transition animation to complete before redirecting
    setTimeout(() => {
      // Replace '/compare' with your actual redirect URL
      props.onClick();
    }, 400); // Adjust the duration according to your transition animation
  };

  return (
    <div>      
      <div>
        <button className={`blob-btn ${theme === 'light' ? 'light' : 'dark'}`} onClick={handleClick} type={props.type}>
          {props.text}
          <span className={`blob-btn__inner ${theme === 'light' ? 'light' : 'dark'}`}>
            <span className="blob-btn__blobs">
              <span className={`blob-btn__blob ${theme === 'light' ? 'light' : 'dark'}`}></span>
              <span className={`blob-btn__blob ${theme === 'light' ? 'light' : 'dark'}`}></span>
              <span className={`blob-btn__blob ${theme === 'light' ? 'light' : 'dark'}`}></span>
              <span className={`blob-btn__blob ${theme === 'light' ? 'light' : 'dark'}`}></span>
            </span>
          </span>
        </button>
      </div>
      <br />

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Button;
