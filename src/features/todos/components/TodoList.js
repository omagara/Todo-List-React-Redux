import React from 'react'
import TodoForm from './TodoForm';
import TodoGroup from './TodoGroup';
import '../styles/TodoList.css'

function TodoList() {
    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <TodoForm />
            <TodoGroup />
        </div>
    )
}

export default TodoList
