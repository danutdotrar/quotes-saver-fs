import axios from "axios";
const baseUrl = "http://localhost:3001/quotes";

const getAll = () => {
    return axios.get(baseUrl);
};

const create = (newObject) => {
    return axios.post(baseUrl, newObject);
};

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject);
};

const deleteQuote = (id) => {
    return axios.delete(`${baseUrl}/${id}`);
};

export default { getAll, create, update, deleteQuote };
