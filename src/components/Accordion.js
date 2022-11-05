export default function Accordion() {
    return (
        <div className = "accordion">
            <div className = "form">
                <div class="input_info">
                    <p>Фамилия:</p>
                    <input type = "text" placeholder = "Иванов" name = "surname"></input>
                </div>
                <div class="input_info">
                    <p>Имя:</p><input type = "text" placeholder = "Иван" name = "name"></input>
                </div>
                <div class="input_info">
                    <p>Отчество:</p>
                    <input type = "text" placeholder = "Иванович" name = "lastname"></input>
                </div>
                <div class="input_info">
                   <p>Причина вызова</p>
                    <br></br>
                    <select className = "selectList">
                        <option disabled selected>Выберите из списка</option>
                        <option>Пожар</option>
                        <option>Преступление</option> 
                        <option>Наводнение</option> 
                        <option>Утечка газа</option> 
                        <option>Другое</option> 
                    </select> 
                </div>
                <br></br>
                <div class="input_info">
                    <p>Нужная информация</p>
                    <textarea className = "textHelp" placeholder = "Опишите ситуацию"></textarea>
                </div>
                
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