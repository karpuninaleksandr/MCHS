import Header from "./components/ManagementHeader";
import ManagementAccordion from "./components/ManagementAccordion";
import ManagementContent from "./components/ManagementContent";
import ManagementRightAccordion from "./components/ManagementRightAccordion"
import { useCookies } from "react-cookie";
import { useState } from "react"

function Management() {
    const[call, setCall] = useState(null)
    const [cookies, setCookie] = useCookies(["authorization"])
    return (
        <div className = 'management_start'> 
            {cookies != undefined && cookies.authorization == 'true' ?
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