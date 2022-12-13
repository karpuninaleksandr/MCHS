class Api {
    static fetchData = async(urlToFetch) => {
        const result1 = await fetch(urlToFetch,
            {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            const result = await result1.json()
            console.log(result)
            return result
    }
}

export default Api