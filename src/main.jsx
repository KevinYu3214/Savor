import "./global_styles/index.scss";

import React from "react";
import Home from "./Home";
import Compare from "./pages/Compare";
import Playlists from "./pages/Playlists";
import Search from "./pages/Search";
import Rankings from "./pages/Rankings";

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/playlists" element={<Playlists />} />
      <Route path="/search" element={<Search />} /> 
      <Route path = "/rankings" element={<Rankings />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
