import '../App.css';
import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';

function Task(props) {
    const [editing, updateEditing] = useState(false)
    const [textEdit, updateTextEdit] = useState(props.task.text)
    return (
        <Draggable draggableId={props.task.key} index={props.index}>
            {(provided) => (
                <div className='task'
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {props.task.text}
                    {/*
                    {editing ? <input value={textEdit} /> : <p>{props.task.text}</p>}
                    <button onClick={() => (props.nextStatus(props.task.key, props.category))}>Continue</button>
                    {editing ? <button>Save</button> : <button>Edit</button>} */}
                </div>)}
        </Draggable>
    );
}

export default Task;