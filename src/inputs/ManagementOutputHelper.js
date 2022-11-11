export default function ManagementOutput(props) {
    const data = 
    //getCallList()
    [{
        id: 9,
        person: {
            id: 23,
            name: "NAME",
            surname: "SURNAME",
            patronymic: "PATRONYMIC"
        },
        reason: "REASON",
        comment: "COMMENT",
        injures: "INJURES"
    },{
        id: 10,
        person: {
            id: 23,
            name: "NAME",
            surname: "SURNAME",
            patronymic: "PATRONYMIC"
        },
        reason: "REASON",
        comment: "COMMENT",
        injures: "INJURES"
    }]

    return (
        <ul className = "management_call_list">
            {
                data.map(call => (
                    <li key={call.id} onClick={() => props.updateCall(call)}>
                        <div>
                            <p>Причина вызова: {call.reason}</p>
                            {
                                call.injures === "Да" 
                                    ? <p>Есть пострадавшие</p> 
                                    : call.injures === "Нет" 
                                        ? <p>Нет пострадавших</p> 
                                        : <p>Нет информации о пострадавших</p>
                            }
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}



async function getCallList() {
    try{
        const result = await fetch("http://localhost:8000/api/calls",
        {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const datas = await result.json();
        return datas;
    } catch (error) {
        console.error('Ошибка:', error);
        return null;
    }
}
