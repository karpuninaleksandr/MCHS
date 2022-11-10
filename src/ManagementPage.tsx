import Header from "./components/ManagementHeader";
import ManagementAccordion from "./components/ManagementAccordion";
import ManagementContent from "./components/ManagementContent";
import ManagementRightAccordion from "./components/ManagementRightAccordion"

function Management() {
    return (
        <div className = 'start'> 
            <Header />
            <ManagementAccordion />
            {/* <ManagementContent /> */}
            <ManagementRightAccordion />
        </div>
    )
 }

 export default Management;