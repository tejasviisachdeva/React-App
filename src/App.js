import './App.css';
import TodoForm from "./Mycomponents/TodoForm.js";
import TodoItem from "./Mycomponents/TodoItem.js";
import {useEffect, useState} from "react";

function App() {
  const [tasks,setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    setTasks(tasks || []);
  }, []);

  function addTask(name) {
  setTasks(prev => {
    return [...prev, { id: Date.now(), name: name, done: false }];
  });
}

  
function removeTask(id) {
  setTasks(prev => prev.filter(task => task.id !== id));
}

function updateTaskDone(id, newDone) {
  setTasks(prev =>
    prev.map(task =>
      task.id === id ? { ...task, done: newDone } : task
    )
  );
}
  const numberComplete = tasks.filter(t => t.done).length;
  const numberTotal = tasks.length;

  function getMessage() {
    const percentage = numberComplete/numberTotal * 100;
    if (percentage === 0) {
      return 'Try to do at least one! 🙏';
    }
    if (percentage === 100) {
      return 'Nice job for today! 🏝';
    }
    return 'Keep it going 💪🏻';
  }

  function renameTask(id, newName) {
  setTasks(prev =>
    prev.map(task =>
      task.id === id ? { ...task, name: newName } : task
    )
  );
}


  return (
    <main>
  <h1>{numberComplete}/{numberTotal} Complete</h1>
  <h2>{getMessage()}</h2>
  <TodoForm onAdd={addTask} />

  {tasks.map(task => (
    <TodoItem
      key={task.id}
      name={task.name}
      done={task.done}
      onRename={newName => renameTask(task.id, newName)}
      onTrash={() => removeTask(task.id)}
      onToggle={done => updateTaskDone(task.id, done)}
    />
    )
   )
  }
  </main>
  )
}

export default App;
