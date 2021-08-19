import axios from "axios";

const api = axios.create({
    // baseURL: 'https://611cc23ca18e850017decc47.mockapi.io/'
    baseURL: 'http://localhost:8090'

});

export default api;