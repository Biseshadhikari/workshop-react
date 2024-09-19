import React, { useState } from 'react'
import Todolist from './Todolist'
import TodoCreate from './TodoCreate'

function Todowrapper() {
    const [datas,setDatas]  = useState([
  

    ])


    function createTodo(title){ 
        setDatas(prev=>[...prev,
            {'title':title,
            'id':Date.now(),
            'isEditable':false}
        ])
    }
    function changeisEditable(id){ 
        setDatas(prev=>prev.map(e=>{
            return e.id == id?({
                ...e,
                "isEditable":true
            }):e
    }))
       
    }


    function deleteTodo(id){ 
        setDatas(prev=>prev.filter(e=>e.id!=id))
    }
  return (
    <div>
        <TodoCreate createTodo = {createTodo}/>
        { 
            datas.map((data)=>(
                <Todolist key = {data.id} data ={data} changeisEditable = {changeisEditable} deleteTodo = {deleteTodo}/>
            ))
        }
        
    </div>
  )
}

export default Todowrapper
