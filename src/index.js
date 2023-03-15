import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Error from "./components/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/freelances" />
        <Route path="/results" />
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNum" element={<Survey />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
