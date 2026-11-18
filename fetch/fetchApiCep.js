//https://viacep.com.br/

const { question } = require("readline-sync");

// const fetchAPI = async () => {
//     const response = await fetch("https://viacep.com.br/ws/01001000/json/")
//     const data = await response.json()

//     console.log(data);
// }
// fetchAPI()

const fetchAPI = async (cep) => {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const data = await response.json()
    
        console.log(data);
    } catch (error) {
        console.error("Ocorreu um erro:", error);
        
    }
    
} 

fetchAPI(question("Digite o seu cep: "))