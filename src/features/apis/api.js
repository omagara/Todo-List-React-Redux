import axios from "axios";

const api = axios.create({
    baseURL: 'https://5d6f7991482b530014d2e376.mockapi.io/api'

});

export default api;