import Header from "./components/ManagementHeader";
import ManagementAccordion from "./components/ManagementAccordion";
import ManagementContent from "./components/ManagementContent";
import Footer from "./components/Footer";
import ManagementRightAccordion from "./components/ManagementRightAccordion"

function Management() {
    return (
        <div className = 'start'> 
            <Header />
            <ManagementAccordion />
            {/* <ManagementContent /> */}
            <ManagementRightAccordion />
            <Footer />
        </div>
    )
 }

 export default Management;