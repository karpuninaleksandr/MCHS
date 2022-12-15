import { NavLink } from "react-router-dom";
import { useState } from "react"
import NewWorkerInput from "../inputs/ManagementAddWorker.js"
//<NewWorkerInput styleModal = {styleModalForm} updateStyleModal = {setStyleModalForm} />
//<button className = 'button_openFormWorker' onClick = {setStyleModalForm([1, 'visible'])}>Добавить работника</button>
export default function ManagementHeader() {
    const [styleModalForm, setStyleModalForm] = useState([0, 'hidden'])
    return (
        <div className = "guest_header">
            <button className = 'button_openFormWorker' onClick = {() => setStyleModalForm([1, 'visible'])}>Добавить работника</button>
            <NewWorkerInput styleModal = {styleModalForm} updateStyleModal = {setStyleModalForm} />
            <h2>Служба защиты Онлайн</h2>
            <div className = "registration">
                <NavLink className="nav-link" to="/">
                    <button className = 'button_entrance'>Выход</button>
                </NavLink>
            </div>
        </div>
    )
}