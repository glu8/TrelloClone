import '../App.css';
import React, { useState } from 'react';

function Task(props) {
    const [editing, updateEditing] = useState(false)
    const [textEdit, updateTextEdit] = useState(props.task.text)
    return (
        <div className='task'>
            {editing ? <input value={textEdit} /> : <p>{props.task.text}</p>}
            <button onClick={() => (props.nextStatus(props.task.key, props.category))}>Continue</button>
            {editing ? <button>Save</button> : <button>Edit</button>}
        </div>
    );
}

export default Task;