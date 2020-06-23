import axios from 'axios'

const baseUrl = "http://localhost:3001/persons"

//hakeminen
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

//lähetetään uudet tiedot
const create = personObject => {
    const request = axios.post(baseUrl, personObject)
    return request.then(response => response.data)
}

const deletePerson = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request
            .then(response => response.data)
            .catch((error) => {
                throw error.response.data
            })
}

export default {
    getAll,
    create,
    deletePerson
}