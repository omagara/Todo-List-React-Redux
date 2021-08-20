import React, {useState} from 'react'
import { selectTodoById, ToggleTodo, RemoveTodo } from '../reducers/todosSlice';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/TodoItem.css'
import { deleteTodo, updateTodo } from '../../apis/todos';
import {DeleteOutlined, EditOutlined} from '@ant-design/icons'
import { Modal, Button, Input } from 'antd';

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
        deleteTodo(props.itemId).then((response) => {
            dispatch(RemoveTodo(response.data));
        });
        event.stopPropagation();
    }

 
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [textInput, setTextInput] = useState(todo.text);
    const { TextArea } = Input;    
          
            const showModal = () => {
                if (todoStatus === todo.done){
                    EditOutlined.visible(false);
                    setIsModalVisible(false);
                }
                else {
                setIsModalVisible(true);
                }
            
          };
          const handleOk = () => {
              if (Input === todo.text || Input === ""){
                setIsModalVisible(false);
              }
              else{
                  setTextInput(Input);
              }
            
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
                    <span className ="todoEdit" onClick={showModal}><EditOutlined /> </span>
                       
              <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <TextArea rows={4} defaultValue={todo.text}></TextArea>  
              </Modal>
            
        </div>
    )
}

export default TodoItem;
