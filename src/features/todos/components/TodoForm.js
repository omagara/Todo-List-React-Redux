import React, { useState }from 'react'
import { useDispatch } from 'react-redux';
import { AddTodo } from '../reducers/todosSlice';
import '../styles/TodoForm.css'


function TodoForm() {
    const [inputText, setText] = useState("");
    const dispatch = useDispatch();

    function handleImputTextChange(event){
        setText(event.target.value);
        console.log(event.target.value);
    }

    function handleInputTextAdd(){
        console.log("input text to be added: ", inputText);
        dispatch(AddTodo(inputText));
        setText("");
    }
    
    return (
        <div className = "TodoForm">
            <input
                type = "text"
                placeholder = "input a new todo item"
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
