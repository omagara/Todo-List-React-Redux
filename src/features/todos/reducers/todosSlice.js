import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import {v4 as uuid} from "uuid";

const todosAdapter = createEntityAdapter();
const initialState =  todosAdapter.getInitialState();

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        AddTodo (state, action){
            // todosAdapter.addOne(state,{
            //     id: uuid(),
            //     text:action.payload,
            //     done: false,
            // });
            todosAdapter.addOne(state, action.payload);
        },
        
        ToggleTodo(state, action){
            todosAdapter.updateOne(state, {
                id: action.payload.id,
                changes: action.payload.updateTodo
            })
        },

        RemoveTodo(state, action){
            todosAdapter.removeOne(state, action.payload.id); 
        },

        AddTodos(state,action){
            todosAdapter.addMany(state,action.payload);
        }
    },
});

export default todosSlice.reducer;
export const { selectAll: selectTodos, selectIds: selectTodoIds, selectById: selectTodoById} = todosAdapter.getSelectors((state) => state.todoList);
export const { AddTodos, AddTodo, ToggleTodo, RemoveTodo } = todosSlice.actions;
export const selectDoneItems = createSelector([selectTodos], (todos) => todos.filter((todo) => todo.done));