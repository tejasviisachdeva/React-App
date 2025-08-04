/*import { useState } from 'react';

export const TodoItems = (
  // { task, onToggle, onDelete, onEdit }
) => {
        const [isEditing, setIsEditing] = useState(false);
        const [editText, setEditText] = useState("");
        const task = () => {}
        const onToggle = (id) => {}
        const onDelete = (id) => {}


        const handleEdit = () => {
            if (isEditing) {
                if (editText.trim() !== ''); {
                    // onEdit(task.id, editText.trim());
                    setIsEditing(false);
                }
            } else {
                setIsEditing(true);
                // setIsEditing(task.trim);
            }
        };

        const handleCancel = () => {
            setIsEditing(false);
            // setEditText(task.edit);
        };

        const handleKeyPress = (e) => {
            if (e.key === 'Enter') {
                handleEdit();
            } else if (e.key === 'Escape') {
                handleCancel();
            }
        };
    return (
    <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <input
        type="checkbox"
        checked={task?.completed}
        onChange={() => onToggle(task?.id)}
        className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 focus:ring-2"
      />

      {isEditing ? (
        <div className="flex-1 flex items-center gap-2">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyPress}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            autoFocus
          />
          <button
            onClick={handleEdit}
            className="p-2 text-green-600 hover:bg-green-50 rounded-md transition-colors"
            title="Save"
          >
          </button>
          <button
            onClick={handleCancel}
            className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
            title="Cancel"
          >
    
          </button>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-between">
          <span
            className={`flex-1 ${task?.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
          >
            text
            {/* {task?.text} */
          /*</span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleEdit}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
              title="Edit"
            >
              
            </button>
            <button
              onClick={() => onDelete(task?.id)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
              title="Delete"
            >
              🗑️
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItems;*/

import Checkbox from "./Checkbox";
import {useState} from "react";

export default function TodoItem({name,done,onToggle,onTrash,onRename}) {
  const [editMode,setEditMode] = useState(false);
  return (
    <div className={'task ' + (done?'done':'')}>
      <Checkbox checked={done} onClick={() => onToggle(!done)} />
      {!editMode && (
        <div className="task-name" onClick={() => setEditMode(prev => !prev)}>
          <span>{name}</span>
        </div>
      )}
      {editMode && (
        <form onSubmit={e => {e.preventDefault();setEditMode(false);}}>
          <input type="text" value={name}
                 onChange={e => onRename(e.target.value)} />
        </form>
      )}
      <button className="trash" onClick={onTrash}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
      </button>
    </div>
  );
}


    
    