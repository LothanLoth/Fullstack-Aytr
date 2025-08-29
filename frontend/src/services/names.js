import axios from "axios"

const nomesAPI = axios.create({baseURL: "http://localhost:8000"})

async function getNomes()
{
    const response = await nomesAPI.get("/")

    return response.data
}

export {
    getNomes
}