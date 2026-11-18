// fetch("https://dummyjson.com/quotes/random")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Error HTTP: " + response.status);
//         }

//         return response.json()
//     })
//     .then(data => console.log(data))
//     .catch(erro => console.log("Erro:", erro.message))

const fetchAPI = async () => {
    try {
        const response = await fetch("https://dummyjson.com/quotes/random")

        if (!response.ok) {
            throw new Error("Erro HTTP: "+ response.status);
        }

        const data = await response.json()

        console.log(data.quote);
        console.log(data.author);
        
    } catch (error) {
        console.log("Eror: ", error.message);
    }
}
fetchAPI()