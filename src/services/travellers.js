import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/travellers';

const getAllTravellers = () => {
    axios 
        .get(baseUrl)
        .then(res => res.data);
}

const addTraveller = (traveller) => {
    return axios.post(baseUrl, traveller);
}

const deleteTraveller = (id) => {
    return axios.delete(`${baseUrl}/${id}`);
}

export default {
    getAllTravellers: getAllTravellers,
    addTraveller: addTraveller,
    deleteTraveller: deleteTraveller
}