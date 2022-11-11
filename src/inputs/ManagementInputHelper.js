export default function ManagementInput(props) {
    if (props.call == undefined) return <p>Выберите вызов</p>
    else 
    return <div className="box_name">
        <p>Пострадавший:</p>
        <br></br>
        <p>{props.call.person.surname}</p>
        <p>{props.call.person.name}</p>
        <p>{props.call.person.patronymic}</p>
        <br></br>
        <p>Комментарий пострадавшего: {props.call.comment}</p>
        <br></br>
        <p>Необходимость в оказании первой помощи: {props.call.injures}</p>
    </div>
}