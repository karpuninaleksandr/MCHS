import { useState, useContext } from "react"
import { NavLink } from "react-router-dom"
import { Authorizatoin } from "../index.js"

export default function Header() {
    const[login, setLogin] = useState()
    const[password, setRassword] = useState()

    const {setAuthContext} = useContext(Authorizatoin)

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
                                    <button onClick={setAuthContext(true)} className = "entry">ОК</button>
                                </NavLink>
                            </>
                        : <button className = "entry">ОК</button>
                    }
                    
                </div>
            </div>
        </div>
    )
}