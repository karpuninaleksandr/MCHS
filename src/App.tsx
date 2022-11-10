import React from 'react';
import Headers from "./components/Header";
import Accordion from "./components/GuestAccordion";
import Content from "./components/GuestContent";

function App() {
    return (
        <div className = 'start'> 
            <Content />
            <Headers  />
            <Accordion />
        </div>
    )
 }

 export default App;