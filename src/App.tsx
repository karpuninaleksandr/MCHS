import React from 'react';
import GuestHeader from "./components/GuestHeader";
import GuestAccordion from "./components/GuestAccordion";
import GuestContent from "./components/GuestContent";

function App() {
    return (
        <div className = 'start'> 
            <GuestContent /> 
            <GuestHeader  />
            <GuestAccordion />
        </div>
    )
 }

 export default App;