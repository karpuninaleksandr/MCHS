export default function ManagementInput(props) {
    if (props.call === undefined) return <p>Null</p>
    else 
    return <div className="box_name">
            {props.call.person.surname}{props.call.person.name}{props.call.patronymic}
            {props.call.comment}
        </div>
}