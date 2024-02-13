

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddToAction, RemoveTodoAction } from './actions';
import './App.css';

function App() {
  const dispatch= useDispatch();
  const [todo, setTodo] = useState();
  const Todo= useSelector((state)=>state.Todo);

  const {todos}=Todo;

const handleSubmit=(e)=>{
 e.preventDefault(e);
 console.log("67")
 dispatch(AddToAction(todo))
}

const removeHandler=(e)=>{
  console.log("76",e)
  dispatch(RemoveTodoAction(e))
}
console.log(todos)

  return (
    <div className="app">
      <div className='header'>
     <div><h2>Todo App</h2></div>
     </div>
       <div className='body'>
     <form onSubmit={handleSubmit}>
       <input name='todo' type='text' onChange={(e)=>setTodo(e.target.value)}  /> 
       <button type='submit' >Go</button> 
    </form>
    <ul>
      {todos?.map((item,index)=>{
     return( <li key={index+"listing"}>
      <span><h5>{item}</h5></span>
        <button style={{background:"black", color:"white"}} onClick={()=>removeHandler(item)}>Delete</button>
      </li>)
      })}
    </ul>  
    </div>
    </div>
  );
}

export default App;
