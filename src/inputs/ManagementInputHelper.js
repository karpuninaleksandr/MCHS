export default function ManagementInput(props) {
    if (props.call == undefined) return <p>Null</p>
    else 
    return <div className="box_name">
            {props.call.surname}{props.call.name}{props.call.patronymic}
            {props.call.comment}
        </div>
}