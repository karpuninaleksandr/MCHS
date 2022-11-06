import React from "react"

export default class ClientInput extends React.Component {

    constructor() {
        super()
        this.state = {
          surname: "",
          name: "",
          patronymic: "",
          reason: "Другое",
          comment: "", 
          injures: "Нет информации"
        };
    
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInjures = this.handleInjures.bind(this)
    }

    handleInputChange(event) {
        const target = event.target
        const value =  target.value
        const name = target.name
    
        this.setState({[name]: value})
    }

    handleInjures(event) {
        const target = event.target
        const name = target.name

        if (target.checked) this.setState({[name]: target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        const surname = event.target.surname.value
        const name = event.target.name.value
        const patronymic = event.target.patronymic.value
        const reason = event.target.reason.value
        const comment = event.target.comment.value
        console.log(surname, name, patronymic, reason, comment)
      }

    render() {
        return (
            <div className = "form">
                <form onSubmit={this.handleSubmit}>
                <div className="input_info">
                    <p>Фамилия:</p>
                    <input name="surname" type = "text" placeholder = "Иванов" onChange={this.handleInputChange}></input>
                </div>
                <div className="input_info">
                    <p>Имя:</p>
                    <input name="name" type = "text" placeholder = "Иван" onChange={this.handleInputChange}></input>
                </div>
                <div className="input_info">
                    <p>Отчество:</p>
                    <input name ="patronymic" type = "text" placeholder = "Иванович" onChange={this.handleInputChange}></input>
                </div>
                <div className="input_info">
                    <p>Причина вызова</p>
                    <br></br>
                    <select className = "select_list" name="reason" onChange={this.handleInputChange}>
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
                    <textarea name="comment" className = "text_help" placeholder = "Опишите ситуацию" onChange={this.handleInputChange}></textarea>
                </div>
                <br></br>
                <p>Есть ли пострадавшие?</p>
                <input type="checkbox" value="Да" name="injures" onChange={this.handleInjures}/> Да
                <br></br>
                <input type="checkbox" value="Нет" name="injures" onChange={this.handleInjures}/> Нет
                <br></br>
                <input type="checkbox" value="Нет информации" name="injures" onChange={this.handleInjures}/> Нет информации
                <br></br>
                <button onClick={ console.log(this.state)} className = 'call'>Вызов</button>
                </form>
            </div>
        )
    } 
}
