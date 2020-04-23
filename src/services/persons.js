import axios from 'axios'

const baseURL = 'https://warm-tor-69264.herokuapp.com/persons';

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

const updateContact = (id, updatedObj) =>{
    return axios.put(`${baseURL}/${id}`, updatedObj)
}


export default {
    getAll: getAll,
    getOneById: getOneById,
    create: create,
    deleteContact: deleteContact,
    updateContact: updateContact
}