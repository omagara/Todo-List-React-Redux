import React from 'react'
import { selectTodoById, ToggleTodo, RemoveTodo } from '../reducers/todosSlice';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/TodoItem.css'

function TodoItem(props) {
    const todo = useSelector(state => selectTodoById(state, props.itemId))
    const dispatch = useDispatch();
    const todoStatus = todo.done ? "done" : "";
    const removeDispatch = useDispatch(); 
    
    function handleClick(){
        dispatch(ToggleTodo(props.itemId))
    }

    function handleRemove(event){
        event.stopPropagation();
        dispatch(RemoveTodo(props.itemId));
    }

    
    
    return (
        <div className = {`TodoItem-todo ${todoStatus}`} onClick={handleClick}>
            {todo.text}
            <span 
                    className ="todoRemove" 
                    onClick = {handleRemove}>x</span>
        </div>
    )
}

export default TodoItem;
