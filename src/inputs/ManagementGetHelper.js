import { useState, useEffect } from "react"
import Api from "./api"

export default function ManagementGet() {
    const[data, setData] = useState(null)
    useEffect(()=> {
        // Api.fetchData("http://localhost:8000/api/persons").then(data => setData(data))
    }, [])
    console.log(data)
    
    return <>
        {data ? <ul className="management_people_list">
            {data.map(man => (
                <li key={man.id}>
                    <div>
                        <p>{man.surname} {man.name} {man.patronymic}</p>
                    </div>
                </li>
            ))}
            </ul> : <p>Нет данных о работниках</p>
        } 
    </> 
}

