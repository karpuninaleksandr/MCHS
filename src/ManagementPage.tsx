import Header from "./components/ManagementHeader";
import ManagementAccordion from "./components/ManagementAccordion";
import ManagementContent from "./components/ManagementContent";
import ManagementRightAccordion from "./components/ManagementRightAccordion"
import { useCookies } from "react-cookie";
import { useState } from "react"

function Management() {
    const[call, setCall] = useState(null)
    const [clusterPoints, setClusterPointer] = useState([[57.619234, 39.899597], [56.719234, 39.799597]])
    const [cookies, setCookie] = useCookies(["authorization"])
    const [mapDisplay, setMapDisplay] = useState('block')
    return (
        <div className = 'management_start'> 
            {cookies != undefined && cookies.authorization == 'true' ?
            <>
                <Header updateMapDisplay = { setMapDisplay }/>
                <ManagementAccordion updateCall = { setCall } updateMassPointer = { setClusterPointer }/>
                <ManagementContent mapDisplay = { mapDisplay } call = { call } massPointer = { clusterPoints }/>
                <ManagementRightAccordion call = { call } />
            </>
            : <p>Авторизуйтесь, чтобы просмотреть эту страницу</p>
}
        </div>
    )
 }

 export default Management;