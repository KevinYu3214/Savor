import "./global_styles/index.scss";
import React, { useContext, useEffect } from "react";
import Home from "./Home";
import Compare from "./pages/Compare";
import Playlists from "./pages/Playlists";
import Search from "./pages/Search";
import Account from "./pages/Account";
import Rankings from "./pages/Rankings";
import SignUp from "./pages/Signup";
import LogIn from "./pages/LogIn";
import ResetPassword from "./pages/ResetPassword"
import Test from "./pages/Test";
import Stats from "./pages/Stats";

//import {createRoot} from "react-doms/client";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider, ThemeContext } from "./contexts/ThemeContext";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

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
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} /> 
        <Route path="resetpassword" element={<ResetPassword />} />
        <Route path="/test" element={<Test/>}/>
        <Route path="/login" element={<LogIn />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
      <button
        className="theme-container"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}>      
        {theme === "light" ? "DARK" : "LIGHT"}
      </button>
    <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
  	<label for="menu-icon"></label>
  	<nav class="nav"> 		
  		<ul class="pt-5">
  			<li><a href={"/"}>Home</a></li>
  			<li><a href={"/compare"}>Compare</a></li>
        <li><a href={"/playlists"}>Playlists</a></li>
  			<li><a href={"/search"}>Search</a></li>
  			<li><a href={"/rankings"}>Rankings</a></li>
  			<li><a href={"/account"}>Account</a></li>
  		</ul>
  	</nav>
    </div>
  );
};

ReactDOM.render(
  <ThemeProvider>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
