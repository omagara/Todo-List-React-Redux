import React from 'react'
import TodoItem from './TodoItem';
import {selectDoneItems} from '../reducers/todosSlice';
import {useSelector} from 'react-redux';


function DoneList() {

    const doneItems = useSelector(selectDoneItems);
    return (
        <div>
            {
              doneItems.map((item) => (
                <TodoItem key={item.id} itemId={item.id} />
            ))
            }
        </div>
    )
}

export default DoneList
