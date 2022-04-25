import React, { useState } from 'react';
import './App.css';
import Column from './components/Column.js';
import { DragDropContext } from 'react-beautiful-dnd';

function App() {
  const [tasks, updateTasks] = useState([
    {
      key: "task-0",
      text: "task 0",
      categoryKey: 0
    },
    {
      key: "task-1",
      text: "task 1",
      categoryKey: 0
    },
    {
      key: "task-2",
      text: "task 2",
      categoryKey: 0
    },
  ]);
  const [input, updateInput] = useState("");
  const [newCategory, updateNewCategory] = useState("");
  const [categories, updateCategories] = useState([
    {
      key: 0,
      index: 0,
      name: "Backlog",
    },
    {
      key: 1,
      index: 1,
      name: "InProgress"
    },
    {
      key: 2,
      index: 2,
      name: "Completed"
    },
  ]);

  function addTask(text, categoryKey) {
    let key = "task-" + tasks.length
    updateTasks([...tasks, { key: key, text: text, categoryKey: categoryKey }]);
  }

  function addCategory(name) {
    let key = categories.length
    updateCategories([...categories, { key: key, index: key, name: name }])
  }

  function onChangeInput(e) {
    updateInput(e.target.value);
  }

  function onChangeNewCategory(e) {
    updateNewCategory(e.target.value);
  }

  function nextStatus(key, category) {

    let newCategory = "Deleted"
    if (category.index + 1 < categories.length) {
      newCategory = categories[category.index + 1].name;

    }


    let updatedTasks = tasks.map((task) => {
      if (task.key === key) {
        return { ...task, category: newCategory };
      }
      return task;
    })
    updateTasks(updatedTasks);
  }

  function onDragEnd() {

  }

  return (
    <div className="App">
      <div className="header">
        <h2>Trello Clone</h2>

        <input value={input} onChange={onChangeInput}></input>
        <button onClick={() => addTask(input, 0)}>Submit</button>

        <input value={newCategory} onChange={onChangeNewCategory}></input>
        <button onClick={() => addCategory(newCategory)}>Create New Category</button>

      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        {categories.map((category) => <Column tasks={tasks} category={category} addTask={addTask} nextStatus={nextStatus} />)}
      </DragDropContext>
    </div>
  );
}

export default App;
