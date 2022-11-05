import React from 'react';
import Headers from "./components/Header";
import Accordion from "./components/Accordion";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
    return (
        <div className = 'start'> 
            <Headers  />
            <Accordion />
            <Content />
            <Footer />
        </div>
    )
 }

 export default App;