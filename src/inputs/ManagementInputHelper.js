export default function ManagementInput(props) {
    console.log(props.call)
    if (props.call == undefined) return <p>Выберите вызов для просмотра</p>
    else 
    return <div className="box_name">
            <p>Причина вызова: {props.call.reason}</p>
            <p>Есть ли пострадавшие: {props.call.injures}</p>
            <p>Комментарий пострадавшего: {props.call.comment}</p>
        </div>
}