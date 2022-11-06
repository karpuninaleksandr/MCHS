import React from 'react';
import Headers from "./components/Header";
import Accordion from "./components/Accordion";
import Content from "./components/Content";

function App() {
    return (
        <div className = 'start'> 
            <Headers  />
            <Accordion />
            <Content />
        </div>
    )
 }

 export default App;