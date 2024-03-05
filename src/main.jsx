import "./global_styles/index.scss";
import React, { useContext, useEffect } from "react";
import Home from "./Home";
import Compare from "./pages/Compare";
import Playlists from "./pages/Playlists";
import Search from "./pages/Search";
import Account from "./pages/Account";
import Rankings from "./pages/Rankings";
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
      </Routes>
      <button
        className="theme-container"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}>      
        {theme === "light" ? "DARK" : "LIGHT"}
      </button>
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
