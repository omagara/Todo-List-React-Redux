import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TodoForm from './TodoForm';
import TodoGroup from './TodoGroup';
import '../styles/TodoList.css'
import { getTodos } from '../../apis/todos';
import { AddTodos } from '../reducers/todosSlice';

function TodoList() {
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        getTodos().then((response) => {
            console.log("response: ", response.data);
            dispatch(AddTodos(response.data));
        })
    }, [dispatch]) 
    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <TodoForm />
            <TodoGroup />
        </div>
    )
}

export default TodoList
