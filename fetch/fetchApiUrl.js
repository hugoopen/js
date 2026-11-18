//"https://dummyjson.com/users"

const fetchAPI = async (url) => {
    try {
        const response = await fetch(url)
        const data = await response.json()
    
        console.log(data.users[0]);   
    } catch (error) {
        console.error("Ocorreu um erro", error);
    }

}

fetchAPI("https://dummyjson.com/users")