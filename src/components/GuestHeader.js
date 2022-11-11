import { useState } from "react"
import { NavLink } from "react-router-dom";
export default function Header() {
    const[login, setLogin] = useState()
    const[password, setRassword] = useState()
    return (
        <div className = "guest_header">
            <h2>Служба защиты Онлайн</h2>
            <div className = "registration">
                <button className = 'button_entrance'>Вход</button>
                <div className = "registration_form">
                    <p>Логин:</p>
                    <input onChange={(event) => setLogin(event.target.value)} type = "text" name = "login"></input>
                    <p>Пароль:</p>
                    <input onChange={(event) => setRassword(event.target.value)} type = "text" name = "password"></input>
                    <NavLink className="nav-link" to="/management">
                        <button className = "entry">ОК</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}