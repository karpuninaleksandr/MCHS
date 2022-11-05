export default function Accordion() {
    return (
        <div className = "accordion">
            <div className = "form">
                <p>Фамилия: 
                <input readOnly type = "text"  name = "surname"></input></p>
                <p>Имя: 
                <input readOnly type = "text"  name = "name"></input></p>
                <p>Отчество: 
                <input readOnly type = "text"  name = "lastname"></input></p>
                <p><strong>Причина вызова</strong></p>
                <select className = "selectList">
                    <option disabled>Выберите из списка</option>
                    <option>Пожар</option>
                    <option>Преступление</option> 
                    <option>Наводнение</option> 
                    <option>Утечка газа</option> 
                    <option>Другое</option> 
                </select><br></br>
                <textarea className = "textHelp" placeholder = "Опишите по возможности ситуацию"></textarea>
                <p>Есть ли пострадавшие?</p>
                <input type="checkbox" value="Yes" checked="checked" /> Да
                <input type="checkbox" value="No" /> Нет
                <input type="checkbox" value="X3" /> Не знаю
                <button className = 'challenge'>Вызов</button>
            </div>
        </div>
    )

}