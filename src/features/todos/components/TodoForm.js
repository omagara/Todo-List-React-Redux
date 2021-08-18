import React, { useState }from 'react'
import { useDispatch } from 'react-redux';
import { createTodo } from '../../apis/todos';
import { AddTodo } from '../reducers/todosSlice';
import '../styles/TodoForm.css'
import 'antd/dist/antd.css';

function TodoForm() {
    const [inputText, setText] = useState("");
    const dispatch = useDispatch();

    function handleImputTextChange(event){
        setText(event.target.value);
    }

    function handleInputTextAdd(){
        if (inputText === ""){
            alert("Empty String. Please add a todo item.");
        }
        else{
            createTodo(inputText).then((response) => {
            dispatch(AddTodo(response.data));
            });
            setText("");        
        };

    };
    
    return (
        <div className = "TodoForm">
            <input
                type = "text"
                placeholder = "Add a new todo item..."
                value = {inputText}
                onChange = {handleImputTextChange}
            ></input>
            <button
                onClick = {handleInputTextAdd}
            >Add</button>
        </div>
    )
}

export default TodoForm
