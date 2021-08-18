import React from 'react'
import { selectTodoById, ToggleTodo, RemoveTodo } from '../reducers/todosSlice';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/TodoItem.css'

function TodoItem(props) {
    const todo = useSelector(state => selectTodoById(state, props.itemId))
    const dispatch = useDispatch();
    const todoStatus = todo.done ? "done" : "";
    
    function handleClick(){
        dispatch(ToggleTodo(props.itemId))
    }

    function handleRemove(event){
        event.stopPropagation();
        dispatch(RemoveTodo(props.itemId));
    }

    return (
        <div className="items">
            <div className = {`TodoItem-todo ${todoStatus}`} onClick={handleClick}>
                    <span className="todoText">{todo.text}</span>
                    <span className ="todoRemove" onClick = {handleRemove}>x</span>
            </div>
        </div>
    )
}

export default TodoItem;
