import React, { useState } from 'react'
import "./global_styles/index.scss";
import Header from "./components/Header";
import { useAuth } from "./contexts/AuthContext"

function Home() {
  const {currentUser} = useAuth();
  return (
    <>
      <Header />
      <maintext>
        Savor <span>your</span> taste today!
      </maintext>
      <subtitle>Get tailored suggestions today based on your interests</subtitle>
    </>
  )
}

export default Home