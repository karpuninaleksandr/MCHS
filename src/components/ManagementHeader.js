import { useState } from "react"
import { NavLink } from "react-router-dom";
export default function ManagementHeader() {
    const[login, setLogin] = useState()
    const[password, setRassword] = useState()
    return (
        <div className = "guest_header">
            <h2>Служба защиты Онлайн</h2>
            <div className = "registration">
                <button className = 'button_entrance'>Выход</button>
                <div className = "registration_form">
                    <NavLink className="nav-link" to="/">
                        <button className = "entry">ОК</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}