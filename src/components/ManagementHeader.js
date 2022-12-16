import { NavLink } from "react-router-dom";
import { useState } from "react"
import NewWorkerInput from "../inputs/ManagementAddWorker.js"
import { useCookies } from "react-cookie";
import Api from "../inputs/api"
//<NewWorkerInput styleModal = {styleModalForm} updateStyleModal = {setStyleModalForm} />
//<button className = 'button_openFormWorker' onClick = {setStyleModalForm([1, 'visible'])}>Добавить работника</button>
export default function ManagementHeader(props) {
    const [styleModalForm, setStyleModalForm] = useState([0, 'hidden'])
    const [statistics, setStatistics] = useState([0, 'hidden'])
    const [cookies, setCookie] = useCookies(["authorization"])
    const[data, setData] = useState(null)
    
    function handleSetCookie() {
        setCookie("authorization", "false", { path: '/' });
    }
    function click() {
        setStatistics([1, 'visible'])
        props.updateMapDisplay('none')
    }
    function getCalls() {
        Api.fetchData("http://localhost:8000/api/calls/with-peoples").then(data => setData(data))
        console.log(data)
    }
    return (
        <div className = "manager_header">
            <div className = "new_worker">
                <button className = 'button_openFormWorker' onClick = {() => setStyleModalForm([1, 'visible'])}>Добавить работника</button>
                <NewWorkerInput styleModal = {styleModalForm} updateStyleModal = {setStyleModalForm} />
            </div>
            <button className = 'buttonOpenStatistics' onClick = {() => {click(); getCalls()}} >Статистика</button>
            <div className="blockStatistics" style = {{opacity: statistics[0], visibility: statistics[1]}}>
            <button className="close" onClick={() => {window.location.reload();}}>Закрыть</button>
                {
                    data ? data.map(call => call ?
                        <div className="statistics" key={call.id}>
                            <p>Причина вызова: {call.reason}</p>
                            {
                                call.injures === "Да" 
                                    ? <p>Есть пострадавшие</p> 
                                    : call.injures === "Нет" 
                                        ? <p>Нет пострадавших</p> 
                                        : <p>Нет информации о пострадавших</p>
                            }
                            <p>Комментарий пострадавшего: {call.comment}</p>
                            {call.persons.map(person => person.role == "Guest" ? <p>Пострадавший: {person.surname} {person.name} {person.patronymic}</p> : 
                            <p>Назначенный сотрудник: {person.surname} {person.name} {person.patronymic}</p>
                            )}
                        </div> : null
                    ) : null
                }
            </div>
            <h2 className="name">Служба защиты Онлайн</h2>
            <div className = "registration">
                <NavLink className="nav-link" to="/">
                    <button onClick={handleSetCookie} className = 'button_entrance'>Выход</button>
                </NavLink>
            </div>
        </div>
    )
}