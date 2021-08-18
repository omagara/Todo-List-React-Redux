import api from './api';

export const getTodos = () =>{
    return api.get("/todos");
}

export const createTodo = () =>{
    return api.post("/todos", {
        id: "23",
        text: "todo example",
        done: false,
      })
}

