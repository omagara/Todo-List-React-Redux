import React from 'react'
import TodoForm from './TodoForm';
import TodoGroup from './TodoGroup';

function TodoList() {
    return (
        <div>
            <TodoGroup />
            <TodoForm />
        </div>
    )
}

export default TodoList
