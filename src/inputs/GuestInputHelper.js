import React, { useEffect } from "react"

export default class ClientInput extends React.Component {

    constructor() {
        super()
        this.state = {
          surname: "",
          name: "",
          patronymic: "",
          reason: "Другое",
          comment: "", 
          //   coordinateX: 57.6317512,
          //   coordinateY: 39.8858899,
          injures: "Нет информации"
        };
    
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInjures = this.handleInjures.bind(this)
    }

    send() {
        if ((this.state.surname !== "") && (this.state.name !== "") && (this.state.patronymic !== "")) {
            fetch("http://localhost:8000/api/calls",
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    person: {
                        surname: this.state.surname,
                        name: this.state.name,
                        patronymic: this.state.patronymic
                    },
                    reason: this.state.reason,
                    comment: this.state.comment, 
                    injures: this.state.injures
                })
            })
            .then(function(res){ console.log(res) })
            .catch(function(res){ console.log(res) })
        } else console.log("Fill the form you moron") 
        //наверное стоит объяснить челвеку, что форма должна быть заполнена, понятнее
        //но пока пусть будет так
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
        // const coordinateX = props.coordinateX
        // const coordinateY = props.coordinateY
      }

    render() {
        return (
            <div className = "guest_form">
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
                        <option value={"Другое"}>Выберите из списка</option>
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
                <button onClick={() => {this.send()}} className = 'call'>Вызов</button>
                </form>
            </div>
        )
    } 
}