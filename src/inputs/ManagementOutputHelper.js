import { useState, useEffect } from "react"
import Api from "./api"

export default function ManagementOutput(props) {
    const[data, setData] = useState(null)
    useEffect(()=> {
        Api.fetchData("http://localhost:8000/api/calls").then(
            data => {
                setData(data)
                props.updateMassPointer(data.map((call) => ( [call.coordinateX, call.coordinateY])))
            }
        )

        
    }, [])

    return <><p>Список вызовов:</p> {
        data ? <ul className = "management_call_list">
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
        </ul> : <p>Нет происшествий</p>
 } </>
}
