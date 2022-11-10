import Headers from "./components/Header";
import Accordion from "./components/GuestAccordion";
import Content from "./components/GuestContent";
import Footer from "./components/Footer";

function Management() {
    return (
        <div className = 'start'> 
            <Headers />
            <Accordion />
            <Content />
            <Footer />
        </div>
    )
 }

 export default Management;