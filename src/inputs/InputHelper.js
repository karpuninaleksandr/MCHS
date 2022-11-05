import { useState } from "react"

export default function Inputs() {

    const[surname, setSurname] = useState()
    const[name, setName] = useState()
    const[patronymic, setPatronymic] = useState()
    const[reason, setReason] = useState()
    const[comment, setComment] = useState()
    const[injures, setInjures] = useState()

    return (
        <div className = "form">
            <div className="input_info">
                <p>Фамилия:</p>
                <input onChange={(event) => setSurname(event.target.value)} type = "text" placeholder = "Иванов" name = "surname"></input>
            </div>
            <div className="input_info">
                <p>Имя:</p><input onChange={(event) => setName(event.target.value)} type = "text" placeholder = "Иван" name = "name"></input>
            </div>
            <div className="input_info">
                <p>Отчество:</p>
                <input onChange={(event) => setPatronymic(event.target.value)} type = "text" placeholder = "Иванович" name = "lastname"></input>
            </div>
            <div className="input_info">
                <p>Причина вызова</p>
                <br></br>
                <select className = "select_list" onChange={(event) => setReason(event.target.value)}>
                    <option>Выберите из списка</option>
                    <option value={"Пожар"}>Пожар</option>
                    <option value={"Преступление"}>Преступление</option> 
                    <option value={"Наводнение"}>Наводнение</option> 
                    <option value={"Утечка газа"}>Утечка газа</option> 
                    <option value={"Другое"}>Другое</option> 
                </select> 
            </div>
            <br></br>
            <div className="input_info">
              <p>Нужная информация</p>
              <textarea onChange={(event) => setComment(event.target.value)} className = "text_help" placeholder = "Опишите ситуацию"></textarea>
            </div>
            <p>Есть ли пострадавшие?</p>
            <input type="checkbox" value="Yes" onChange={(event) => setInjures(event.target.value)} /> Да
            <br></br>
            <input type="checkbox" value="No" onChange={(event) => setInjures(event.target.value)} /> Нет
            <br></br>
            <input type="checkbox" value="NoInfo" onChange={(event) => setInjures(event.target.value)} /> Не знаю
            <br></br>
            <button onClick={(event) => {}} className = 'call'>Вызов</button>
        </div>
    )
}