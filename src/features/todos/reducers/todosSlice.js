import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import {v4 as uuid} from "uuid";

const todosAdapter = createEntityAdapter();
const initialState =  todosAdapter.getInitialState({
    ids:[1],
    entities: {
        1: {
            id: "1",
            text: "Sample Todo Item...",
            done: false,
        },

    },
});

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        AddTodo (state, action){
            todosAdapter.addOne(state,{
                id: uuid(),
                text:action.payload,
                done: false,
            });
        },
        
        ToggleTodo(state, action){
            const todo = state.entities[action.payload]
            todo.done = !todo.done;
        },

        RemoveTodo(state, action){
            todosAdapter.removeOne(state,action.payload); 
        }
    },
});

export default todosSlice.reducer;
export const { selectAll: selectTodos, selectIds: selectTodoIds, selectById: selectTodoById} = todosAdapter.getSelectors((state) => state.todoList);
export const { AddTodo, ToggleTodo, RemoveTodo } = todosSlice.actions;
export const selectDoneItems = createSelector([selectTodos], (todos) => todos.filter((todo) => todo.done));