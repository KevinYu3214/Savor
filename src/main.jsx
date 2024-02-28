import "./global_styles/index.scss";

import React from "react";
import Home from "./Home";
import Compare from "./pages/Compare";
import Playlists from "./pages/Playlists";
import Search from "./pages/Search";
import Account from "./pages/Account";
import Rankings from "./pages/Rankings";
import SignUp from "./pages/Signup";
import LogIn from "./pages/LogIn";

import {createRoot} from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

const root = createRoot(document.getElementById('root'))

root.render(
  <Router>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/search" element={<Search />} /> 
        <Route path="/account" element={<Account />} />
        <Route path = "/rankings" element={<Rankings />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} /> 
      </Routes>
    </AuthProvider>
  </Router>
);
