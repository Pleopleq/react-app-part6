import axios from 'axios'

const baseURL = 'http://localhost:3001/persons';

const getAll = () =>{
    return axios.get(baseURL);
}

const getOneById = (id, allContacts) =>{
    const filterById = allContacts.filter(contact => contact.id === parseInt(id))
    return filterById
}

const create = newContactObj => {
    return axios.post(baseURL, newContactObj);
}

const deleteContact = (id) =>{
    return axios.delete(`${baseURL}/${id}`);
}


export default {
    getAll: getAll,
    getOneById: getOneById,
    create: create,
    deleteContact: deleteContact
}