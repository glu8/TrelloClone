import React, { useState } from 'react';
import '../App.css';
import Task from './Task.js';
import { Droppable } from 'react-beautiful-dnd';

function Column(props) {

  const [input, updateInput] = useState("");
  function onChangeInput(e) {
    updateInput(e.target.value);
  }

  return (
    <div className='column'>
      <p>{props.category.name}</p>
      <Droppable droppableId={props.category.key}>
        {provided => (
          <div className="taskList" ref={provided.innerRef} {...provided.droppableProps}>
            {
              props.tasks.filter((task) => (task.categoryKey === props.category.key)).map((task, index) => (<Task task={task} category={props.category} nextStatus={props.nextStatus} index={index} />)
              )
            }
            {provided.placeholder}
          </div>
        )
        }
      </Droppable>
      <input value={input} onChange={onChangeInput}></input>
      <button onClick={() => props.addTask(input, props.category.name)}>Add Task</button>
    </div>
  );
}

export default Column;
