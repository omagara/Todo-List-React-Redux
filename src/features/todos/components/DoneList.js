import React from 'react'
import {selectDoneItems} from '../reducers/todosSlice';
import {useSelector} from 'react-redux';
import { Card } from 'antd';
import {FileDoneOutlined} from '@ant-design/icons'
import '../styles/DoneList.css'

function DoneList() {

    const doneItems = useSelector(selectDoneItems);
    return (
        <div className="container">
            <h1>Done Items</h1>
            <div className="cards">
            { 
              doneItems.map((item) => (
                <Card className="card"  title={<FileDoneOutlined/>}>
                <span className="text">{item.text}</span>
                </Card>
            ))
            }
            </div>
        </div>
    )
}

export default DoneList
