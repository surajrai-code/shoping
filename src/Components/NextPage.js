import React, { useState } from 'react'
import Todos from './Todos'
const NextPage = () => {
    const[task,setTask]=useState([]);
const addTask=(taskcontent)=>{
    setTask([...task,taskcontent])
};
  return (
    <>
        <Todos onAdd={addTask}/>
       <div>
       {
            task.map((it,I)=>{
                <li key={I}>
                    {task}
                </li>
            })
        }
       </div>
    </>
  )
}

export default NextPage