import React from 'react';
import GuestHeader from "./components/GuestHeader";
import GuestAccordion from "./components/GuestAccordion";
import GuestContent from "./components/GuestContent";

function App() {
    return (
        <div className = 'start'> 
            <GuestHeader  />
            <GuestAccordion />
            {/* <GuestContent /> */}
        </div>
    )
 }

 export default App;