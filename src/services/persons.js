import axios from 'axios'

const baseURL = 'http://localhost:3001/persons';

const getAll = () =>{
    return axios.get(baseURL);
}

const create = newContactObj => {
    return axios.post(baseURL, newContactObj);
}

const deleteContact = (id) =>{
    return axios.delete(`${baseURL}/${id}`);
}


export default {
    getAll: getAll,
    create: create,
    deleteContact: deleteContact
}