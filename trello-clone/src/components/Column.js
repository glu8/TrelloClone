import React, { useState } from 'react';
import '../App.css';
import Task from './Task.js';

function Column(props) {

  const [input, updateInput] = useState("");
  function onChangeInput(e) {
    updateInput(e.target.value);
  }

  return (
    <div className='column'>
      <p>{props.category.name}</p>
      {props.tasks.filter((task) => (task.category === props.category.name)).map((task) => (<Task task={task} category={props.category} nextStatus={props.nextStatus} />)
      )}
      <input value={input} onChange={onChangeInput}></input>
      <button onClick={() => props.addTask(input, props.category.name)}>Add Task</button>
    </div>
  );
}

export default Column;
