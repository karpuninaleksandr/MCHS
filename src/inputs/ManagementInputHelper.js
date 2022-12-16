export default function ManagementInput(props) {
    console.log(props.call)
    if (props.call == undefined) return <p>Выберите вызов для просмотра</p>
    else 
    return <div className="box_name">
            <p>Причина вызова: {props.call.reason}</p>
            {props.call.injures === "Да" ? <p>Есть пострадавшие</p> :
                 props.call.injures === "Нет" ? <p>Нет пострадавших</p> 
                : <p>Нет информации о пострадавших</p>}
            <p>Комментарий пострадавшего: {props.call.comment}</p>
        </div>
}