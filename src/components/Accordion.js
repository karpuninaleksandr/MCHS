export default function Accordion() {
    return (
        <div className = "accordion">
            <div className = "form">
                <p>Фамилия: <input readOnly type = "text" placeholder = "Иванов" name = "surname"></input></p>
                <p>Имя: <input readOnly type = "text" placeholder = "Иван" name = "name"></input></p>
                <p>Отчество: <input readOnly type = "text" placeholder = "Иванович" name = "lastname"></input></p>
                <p>Причина вызова</p>
                <select className = "selectList">
                    <option disabled selected>Выберите из списка</option>
                    <option>Пожар</option>
                    <option>Преступление</option> 
                    <option>Наводнение</option> 
                    <option>Утечка газа</option> 
                    <option>Другое</option> 
                </select>
                <br></br>
                <p>Нужная информация</p>
                <textarea className = "textHelp" placeholder = "Опишите, по возможности, ситуацию"></textarea>
                <p>Есть ли пострадавшие?</p>
                <input type="checkbox" value="Yes" /> Да
                <br></br>
                <input type="checkbox" value="No" /> Нет
                <br></br>
                <input type="checkbox" value="NoInfo" /> Не знаю
                <br></br>
                <br></br>
                <button className = 'call'>Вызов</button>
            </div>
        </div>
    )

}