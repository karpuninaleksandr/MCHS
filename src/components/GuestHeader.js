import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useCookies } from "react-cookie";

export default function Header() {
    const[login, setLogin] = useState()
    const[password, setRassword] = useState()
    const [cookies, setCookie] = useCookies(["authorization"])

    function handleSetCookie() {
        setCookie("authorization", "true", { path: '/' });
    }

    return (
        <div className = "guest_header">
            <h2>Служба защиты Онлайн</h2>
            <div className = "registration">
                <button className = 'button_entrance'>Вход</button>
                <div className = "registration_form">
                    <p>Логин:</p>
                    <input onChange={(event) => setLogin(event.target.value)} type = "text" name = "login"></input>
                    <p>Пароль:</p>
                    <input onChange={(event) => setRassword(event.target.value)} type = "password" name = "password"></input>
                    {
                        login == 'system' && password == 'masterkey' ? 
                            <>
                                <NavLink className="nav-link" to="/management">
                                    <button onClick={handleSetCookie} className = "entry">ОК</button>
                                </NavLink>
                            </>
                        : <button className = "entry">ОК</button>
                    }
                    
                </div>
            </div>
        </div>
    )
}