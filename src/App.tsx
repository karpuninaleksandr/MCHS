import React from 'react';
import Headers from "./components/Header";
import Accordion from "./components/GuestAccordion";
import Content from "./components/GuestContent";

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