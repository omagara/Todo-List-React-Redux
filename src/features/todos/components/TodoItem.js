import React from 'react'
import { selectTodoById, ToggleTodo, RemoveTodo } from '../reducers/todosSlice';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/TodoItem.css'
import { deleteTodo, updateTodo } from '../../apis/todos';

function TodoItem(props) {
    const todo = useSelector(state => selectTodoById(state, props.itemId))
    const dispatch = useDispatch();
    const todoStatus = todo.done ? "done" : "";
    
    function handleClick(){
        updateTodo(props.itemId, {done: !todo.done}).then((response) => {
            dispatch(ToggleTodo({id: props.itemId, updateTodo:response.data}));
        });  
    };

    function handleRemove(event){
        event.stopPropagation();
        deleteTodo(props.itemId).then((response) => {
            dispatch(RemoveTodo(response.data));
        });
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
