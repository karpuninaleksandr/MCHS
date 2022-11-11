import Header from "./components/ManagementHeader";
import ManagementAccordion from "./components/ManagementAccordion";
import ManagementContent from "./components/ManagementContent";
import ManagementRightAccordion from "./components/ManagementRightAccordion"
import { useState } from "react";

function Management() {
    const[call, setCall] = useState(null)

    return (
        <div className = 'management_start'> 
            <Header />
            <ManagementAccordion updateCall = {setCall} />
            <ManagementContent />
            <ManagementRightAccordion call = {call} />
        </div>
    )
 }

 export default Management;