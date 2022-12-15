import React,  { useState }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Management from './ManagementPage';
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const Authorizatoin = React.createContext();
function Api() {
  const [AuthContext, setAuthContext] = useState(false)
  return (
  <Authorizatoin.Provider value = {{AuthContext, setAuthContext}}>
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/management" element={<Management />} />
    </Routes>
    <Footer />
  </Router>
</Authorizatoin.Provider>)
}

ReactDOM.render(
  <Api />,
  document.getElementById("root")
);
