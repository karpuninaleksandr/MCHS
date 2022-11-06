import React from 'react';
import Headers from "./components/Header";
import Accordion from "./components/Accordion";
import Content from "./components/Content";
import Footer from "./components/Footer";

function About() {
    return (
        <div className = 'start'> 
            <Accordion />
            <Content />
        </div>
    )
 }

 export default About;