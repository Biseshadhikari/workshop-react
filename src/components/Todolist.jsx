import React from 'react';

function Todolist({ data,deleteTodo,changeisEditable}) {
  return (
    <div className="todo-item bg-white shadow-lg p-4 rounded-lg mb-4 flex justify-between items-center">
        {
            data.isEditable?(
                <input
            type="text"
            id="name"
            name="name"
          
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your Todo list"

          />
            ):(
                <p className="todo-title text-lg font-semibold">{data.title}</p>

            )
        }
      <div className="button-group">
        <button 
          className="delete-btn bg-red-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-red-600" 
          onClick={()=>{ 
            deleteTodo(data.id)
          }}
        >
          Delete
        </button>
        <button 
          className="update-btn bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" 
          onClick={()=>{ 
            changeisEditable(data.id)
          }}
         
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default Todolist;
