import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Management from './ManagementPage';
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/management" element={<Management />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);
