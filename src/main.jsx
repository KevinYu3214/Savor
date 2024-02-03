import "./global_styles/index.scss";

import React from "react";
import Home from "./Home";
import Compare from "./pages/Compare";
import Playlists from "./pages/Playlists";

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/playlists" element={<Playlists />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
