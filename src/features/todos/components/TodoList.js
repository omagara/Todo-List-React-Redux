import React from 'react'
import { useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoGroup from './TodoGroup';
import '../styles/TodoList.css'
import { getTodos } from '../../apis/todos';

function TodoList() {
    
    useEffect(() => {
        getTodos().then((response) => {
            console.log("response: ", response.data)
        })
    }, []) 
    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <TodoForm />
            <TodoGroup />
        </div>
    )
}

export default TodoList
