import { NavLink } from "react-router-dom";
import { useState } from "react"
import NewWorkerInput from "../inputs/ManagementAddWorker.js"
import { useCookies } from "react-cookie";
//<NewWorkerInput styleModal = {styleModalForm} updateStyleModal = {setStyleModalForm} />
//<button className = 'button_openFormWorker' onClick = {setStyleModalForm([1, 'visible'])}>Добавить работника</button>
export default function ManagementHeader() {
    const [styleModalForm, setStyleModalForm] = useState([0, 'hidden'])
    const [cookies, setCookie] = useCookies(["authorization"])
    
    function handleSetCookie() {
        setCookie("authorization", "false", { path: '/' });
    }
    return (
        <div className = "manager_header">
            <div className = "new_worker">
                <button className = 'button_openFormWorker' onClick = {() => setStyleModalForm([1, 'visible'])}>Добавить работника</button>
                <NewWorkerInput styleModal = {styleModalForm} updateStyleModal = {setStyleModalForm} />
            </div>
            <h2>Служба защиты Онлайн</h2>
            <div className = "registration">
                <NavLink className="nav-link" to="/">
                    <button onClick={handleSetCookie} className = 'button_entrance'>Выход</button>
                </NavLink>
            </div>
        </div>
    )
}