import React, { useState } from 'react';
import './App.css';
import Column from './components/Column.js'

function App() {
  const [tasks, updateTasks] = useState([]);
  const [input, updateInput] = useState("");

  function addTask(text) {
    updateTasks([...tasks, {key: Date.now(), text: text, category: "Backlog"}]);
  }

  function onChangeInput(e) {
    updateInput(e.target.value);
  }

  function nextStatus(key, newCategory) {
    console.log("here")
    let updatedTasks = tasks.map((task) => {
      if (task.key === key) {
        return {...task, category: newCategory};
      }
      return task;
    })
    console.log(updatedTasks);
    updateTasks(updatedTasks);
  }

  return (
    <div className="App">
      <h2>Trello Clone</h2>

      <input value={input} onChange={onChangeInput}></input>
      <button onClick={() => addTask(input)}>Submit</button>
      <Column tasks={tasks} filter="Backlog" nextStatus={nextStatus} newStatus="InProgress"/>
      <Column tasks={tasks} filter="InProgress" nextStatus={nextStatus} newStatus="Completed"/>
      <Column tasks={tasks} filter="Completed" nextStatus={nextStatus} newStatus="Deleted"/>
    </div>
  );
}

export default App;
