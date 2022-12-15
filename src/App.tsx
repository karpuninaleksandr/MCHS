import React, { useState, useEffect } from 'react';
import GuestHeader from "./components/GuestHeader";
import GuestAccordion from "./components/GuestAccordion";
import GuestContent from "./components/GuestContent";

function App() {
    const[coordX, setCoordX] = useState(57.619234)
    const[coordY, setCoordY] = useState(39.899597)
    // useEffect(() => {
    //     console.log(coordX)
    // console.log(coordY)}, [coordX, coordY])
    
    return (
        <div className = 'guest_start'> 
            <GuestContent updateCoordX = {setCoordX} updateCoordY = {setCoordY}/> 
            <GuestHeader  />
            <GuestAccordion coordX = {coordX} coordY = {coordY} />
        </div>
    )
 }

 export default App;