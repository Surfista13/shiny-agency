import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import Survey from "./pages/Survey/Survey";
import Error from "./components/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Freelances from "./pages/Freelances/Freelances";
import Results from "./pages/Results/Results";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
        margin:0 1.5rem;
        text-align:center;
    }`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/freelances" element={<Freelances />} />
        <Route path="/results" element={<Results />} />
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNum" element={<Survey />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
