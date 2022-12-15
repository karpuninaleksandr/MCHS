import React from "react"

export default class NewWorkerInput extends React.Component {

    constructor() {
        super()
        this.state = {
          surname: "",
          name: "",
          patronymic: ""
        };   
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    send() {
        if (true/*(this.state.surname !== "") && (this.state.name !== "") && (this.state.patronymic !== "")*/) {
            fetch("http://localhost:8000/api/persons",
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                        surname: this.state.surname,
                        name: this.state.name,
                        patronymic: this.state.patronymic

                })
            })
            .then(function(res){ console.log(res) })
            .catch(function(res){ console.log(res) })
        } else console.log("Fill the form you moron") 
        //наверное стоит объяснить челoвеку, что форма должна быть заполнена, понятнее
        //но пока пусть будет так
    }

    handleInputChange(event) {
        const target = event.target
        const value =  target.value
        const name = target.name
    
        this.setState({[name]: value})
    }

    handleSubmit(event) {
        event.preventDefault()
        const surname = event.target.surname.value
        const name = event.target.name.value
        const patronymic = event.target.patronymic.value
      }

    render() {
        return (
            <div className = "new_worker_form" style = {{opacity: this.props.styleModal[0], visibility: this.props.styleModal[1]}}>
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
                    <br></br>
                    <button onClick={() => {this.send()}} className = 'call'>Добавить</button>
                </form>
            </div>
        )
    } 
}