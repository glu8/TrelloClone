import React, { useState } from 'react';
import './App.css';
import Column from './components/Column.js'

function App() {
  const [tasks, updateTasks] = useState([]);
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

  function addTask(text, category) {
    updateTasks([...tasks, { key: Date.now(), text: text, category: category }]);
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

  return (
    <div className="App">
      <div className="header">
        <h2>Trello Clone</h2>

        <input value={input} onChange={onChangeInput}></input>
        <button onClick={() => addTask(input, "Backlog")}>Submit</button>

        <input value={newCategory} onChange={onChangeNewCategory}></input>
        <button onClick={() => addCategory(newCategory)}>Create New Category</button>

      </div>


      {categories.map((category) => <Column tasks={tasks} category={category} addTask={addTask} nextStatus={nextStatus} />)}
    </div>
  );
}

export default App;
