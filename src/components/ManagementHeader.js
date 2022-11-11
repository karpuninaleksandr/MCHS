import { useState } from "react"
import { NavLink } from "react-router-dom";
export default function ManagementHeader() {
    const[login, setLogin] = useState()
    const[password, setRassword] = useState()
    return (
        <div className = "guest_header">
            <h2>Служба защиты Онлайн</h2>
            <div className = "registration">
                <NavLink className="nav-link" to="/">
                    <button className = 'button_entrance'>Выход</button>
                </NavLink>
            </div>
        </div>
    )
}