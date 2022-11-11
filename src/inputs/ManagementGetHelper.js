export default function ManagementGet() {
    const data = 
     [
        {
            person: {
                id: 1,
                surname: "SURNAME",
                name: "NAME",
                patronymic: "PATRONYMIC"
            }
        }
    ] 
    //getPeopleList()

    console.log(data)
    return <ul className="management_people_list">
        {
            data.map(man => (
                <li key={man.person.id}>
                    <div>
                        <p>{man.person.surname} {man.person.name} {man.person.patronymic}</p>
                    </div>
                </li>
            ))
        }
    </ul>
}

function getPeopleList() {
    fetch("http://localhost:8000/api/persons",
        {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
    .then(function(res) { console.log(res);console.log(res.json());return res.json() })
    .catch(function(res) { console.log(res); return undefined})
}