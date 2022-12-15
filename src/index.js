import React,  { useState }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Management from './ManagementPage';
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

function Api() {

  return (
    <CookiesProvider>
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/management" element={<Management />} />
    </Routes>
    <Footer />
  </Router>
  </CookiesProvider>)
}

ReactDOM.render(
  <Api />,
  document.getElementById("root")
);
