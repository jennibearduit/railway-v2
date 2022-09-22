import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/travellers';

const getAllTravellers = () => {
    return axios
        .get(baseUrl)
        .then(res => res.data);
}

const addTraveller = (traveller) => {
    return axios
        .post(baseUrl, traveller)
        .then(res => res.data);
}

const deleteTraveller = (id) => {
    return axios
        .delete(`${baseUrl}/${id}`)
        .then(res => res.data);
}

export default { getAllTravellers, addTraveller, deleteTraveller }