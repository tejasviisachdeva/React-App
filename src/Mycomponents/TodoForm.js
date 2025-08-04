/*import React from 'react'
import {useState} from 'react'

 const Todoforms = ({ onAdd }) => {
    const [inputText, setInputText] = useState('');
    const handleSubmit = () => {
        if(inputText.trim()!==''){
            onAdd(inputText.trim());
            setInputText('');
        }
    };
    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            handleSubmit();
        }
    }
    return (
  <div className="mb-4">
    <div className="d-flex gap-2">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Add a new task..."
        className="form-control"
      />
      <button
        onClick={handleSubmit}
        className="btn btn-primary"
      >
        Add Task
      </button>
    </div>
  </div>
  );
}
export default Todoforms;*/

import {useState} from "react";

export default function TodoForm({onAdd}) {
  const [taskName,setTaskName] = useState('');
  function handleSubmit(ev) {
    ev.preventDefault();
    onAdd(taskName);
    setTaskName('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <button>+</button>
      <input type="text"
             value={taskName}
             onChange={ev => setTaskName(ev.target.value)}
             placeholder="Your next task..."/>
    </form>
  );
}