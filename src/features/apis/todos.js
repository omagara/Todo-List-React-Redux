import api from './api';

export const getTodos = () =>{
    return api.get("/todos");
}