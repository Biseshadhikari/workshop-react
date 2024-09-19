import React, { useState } from 'react'

function TodoCreate({createTodo}) {
    const [data,setData] = useState('')
  return (
    <div>
      <form className="mb-4" onSubmit={(e)=>{ 
        e.preventDefault()
        createTodo(data)
        setData('')
      }}>
          
          <input
            type="text"
            id="name"
            name="name"
            value = {data}
            onChange={(e)=>{ 
                setData(e.target.value)
            }}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your Todo list"

          />
        </form>
    </div>
  )
}

export default TodoCreate
