import axios from 'axios'

const baseUrl = "/api/persons"

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

const deletePerson = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request
            .then(response => response.data)
            .catch((error) => {
                throw error.response.data
            })
}

const updateNumber = (id, personObject) => {
    const request = axios.put(`${baseUrl}/${id}`, personObject)
    return request.then(response => response.data)
}

export default {
    getAll,
    create,
    deletePerson,
    updateNumber
}