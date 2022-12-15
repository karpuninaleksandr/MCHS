export default async function fetch(props) {
    const result1 = await fetch("http://localhost:8000/api/persons",
        {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
    // .then((res)=>{console.log(res.text()) })
    // .catch(function(res) { console.log(res); return undefined})
        const result = await result1.json()
        console.log(result)
        props.updateData(result)
        return result
    // if (result != undefined) {
    //     const data = await result.json()
    //     return data
    // }
}