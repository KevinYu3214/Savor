import "./global_styles/index.scss";
import React, { useContext, useEffect } from "react";
import Home from "./pages/Home";
import Compare from "./pages/Compare";
import Playlists from "./pages/Playlists";
import Search from "./pages/Search";
import Account from "./pages/Account";
import SignUp from "./pages/Signup";
import LogIn from "./pages/LogIn";
import ResetPassword from "./pages/ResetPassword"
import Stats from "./pages/Stats";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider, ThemeContext } from "./contexts/ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import FloatingHeader from "./components/Header/FloatingHeader";
import { createRoot } from "react-dom/client"; 

const App = () => {
  const { theme, setTheme } = useContext(ThemeContext); // Get the theme and setTheme function from context

  useEffect(() => {
    // Update the class of the html element based on the theme
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <div>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/search" element={<Search />} />
        <Route path="/account" element={<Account />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} /> 
        <Route path="resetpassword" element={<ResetPassword />} />
      </Routes>
      <div className="mode">
      <button
        className="theme-toggle"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
{theme === "dark" ? (
             <svg
             className="sun"
             xmlns="http://www.w3.org/2000/svg"
             width="24"
             height="24"
             viewBox="0 0 24 24"
           >
             <path className="center" d="M12,7a5,5,0,1,0,5,5,5,5,0,0,0-5-5Z" />
             <path className="left" d="M2,13H4a1,1,0,0,0,0-2H2a1,1,0,0,0,0,2Z" />
             <path className="right" d="M20,13h2a1,1,0,0,0,0-2H20a1,1,0,0,0,0,2Z" />
             <path className="top" d="M11,2V4a1,1,0,0,0,2,0V2a1,1,0,0,0-2,0Z" />
             <path className="bottom" d="M11,20v2a1,1,0,0,0,2,0V20a1,1,0,0,0-2,0Z" />
             <path
               className="top-left"
               d="M6,4.58A1,1,0,0,0,4.58,6L5.64,7.05A1,1,0,0,0,7.05,5.64Z"
             />
             <path
               className="bottom-right"
               d="M18.36,17A1,1,0,0,0,17,18.36L18,19.42A1,1,0,1,0,19.42,18Z"
             />
             <path
               className="top-right"
               d="M19.42,6A1,1,0,1,0,18,4.58L17,5.64a1,1,0,0,0,1.41,1.41Z"
             />
             <path
               className="bottom-left"
               d="M7.05,18.36A1,1,0,0,0,5.64,17L4.58,18A1,1,0,1,0,6,19.42Z"
             />
           </svg>
      ) : (
        <svg
        className="moon"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          className="center"
          d="M11,3.05A9,9,0,1,0,21,13a1,1,0,0,0-1.54-.95,5.4,5.4,0,0,1-7.47-7.44A1,1,0,0,0,11,3.05Z"
        />
      </svg>
      )}
</button>
</div>
    <FloatingHeader /> 
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </ThemeProvider>
);
