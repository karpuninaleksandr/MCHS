import Header from "./components/ManagementHeader";
import ManagementAccordion from "./components/ManagementAccordion";
import ManagementContent from "./components/ManagementContent";
import ManagementRightAccordion from "./components/ManagementRightAccordion"
import { useState, useContext } from "react";

import { Authorizatoin } from "./index.js"

function Management() {
    const[call, setCall] = useState(null)
    const {AuthContext, setAuthContext} = useContext(Authorizatoin)
    return (
        <div className = 'management_start'> 
            {AuthContext == true ?
            <>
                <Header />
                <ManagementAccordion updateCall = {setCall} />
                <ManagementContent />
                <ManagementRightAccordion call = {call} />
            </>
            : <p>Авторизуйтесь, чтобы просмотреть эту страницу</p>
}
        </div>
    )
 }

 export default Management;