import React, {useState} from 'react'
import { selectTodoById, ToggleTodo, RemoveTodo } from '../reducers/todosSlice';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/TodoItem.css'
import { deleteTodo, updateTodo } from '../../apis/todos';
import {DeleteOutlined, EditOutlined} from '@ant-design/icons'
import { Modal, Input, message } from 'antd';

function TodoItem(props) {
    const todo = useSelector(state => selectTodoById(state, props.itemId))
    const dispatch = useDispatch();
    const todoStatus = todo.done ? "done" : "";
    
    function handleClick(){
        updateTodo(props.itemId, {done: !todo.done}).then((response) => {
            dispatch(ToggleTodo({id: props.itemId, updateTodo:response.data}));
        });  
    };

    function handleRemove(){
        deleteTodo(props.itemId).then((response) => {
            dispatch(RemoveTodo({id: props.itemId, deleteTodo:response.data}));
        });
        message.success("Todo item deleted successfully")      
    }
 
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [textInput, setTextInput] = useState("");
    const { TextArea } = Input;    
     
    
    function handleEdit(event){
        setTextInput(event.target.value);
    }

        const showModal = () => {
            setIsModalVisible(true);
          };

        const handleOk = () => {
            if(textInput === ""){
                message.warn("No changes were made!");
            }
            else{
                updateTodo(props.itemId, {text: textInput}).then((response) => {
                    dispatch(ToggleTodo({id: props.itemId, updateTodo:response.data}));
                });
                message.success("Todo item updated successfully!")
            }
            setTextInput("");
            setIsModalVisible(false);
          };
        
        const handleCancel = () => {
            setIsModalVisible(false);
          };

    return (
        <div className="items">
            <div className = {`TodoItem-todo ${todoStatus}`} onClick={handleClick}>
                <span className="todoText">{todo.text}</span>        
            </div>        
            <span className ="todoRemove" onClick={handleRemove}><DeleteOutlined /></span>
            {!todo.done &&
                <span className ="todoEdit" onClick={showModal}><EditOutlined /> </span>}    
            <Modal title="Modify Todo Item" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} destroyOnClose={true}>
                <TextArea rows={4} defaultValue={todo.text} onChange={handleEdit}></TextArea>  
            </Modal>
        </div>
    )
}

export default TodoItem;
