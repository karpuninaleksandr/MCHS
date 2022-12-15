import { useState, useEffect } from "react"
import Api from "./api"

export default function ManagementGet(props) {
    const[data, setData] = useState(null)
    useEffect(()=> {
        Api.fetchData("http://localhost:8000/api/persons").then(data => setData(data))
    }, [])
    console.log(data)
    
    function send(worker) {
        if (props.call.id) {
            fetch("http://localhost:8000/api/calls",
            {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: props.call.id,
                    workers: {worker}
                })
            })
            .then(function(res){ console.log(res) })
            .catch(function(res){ console.log(res) })
        }
    }

    return <>
        {data ? <ul className="management_people_list">
            {data.map(man => (
                <button key={man.id} onClick={()=> send(man.id)}>
                    <div>
                        <p>{man.surname} {man.name} {man.patronymic}</p>
                    </div>
                </button>
            ))}
            </ul> : <p>Нет данных о работниках</p>
        } 
    </> 
}

