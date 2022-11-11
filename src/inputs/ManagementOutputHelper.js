export default function ManagementOutput(props) {
    const data = 
    //getCallList()
    [{
        id: 9,
        person: {
            id: 23,
            name: "Евгений",
            surname: "Скворечкин",
            patronymic: "Сергеевич"
        },
        reason: "Наводнение",
        comment: "Затопило подвал и меня вместе с ним",
        injures: "Да"
    },{
        id: 10,
        person: {
            id: 232,
            name: "Илья",
            surname: "Козлов",
            patronymic: "Олегович"
        },
        reason: "Пожар",
        comment: "Жарил курицу загорелась рука",
        injures: "Да"
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
