

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
 e.preventDefault();
 dispatch(AddToAction(todo))
}

const removeHandler=(e)=>{
  e.preventDefault();
  dispatch(RemoveTodoAction(e))
}


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
      <li key={item?.id+"listing"}>
      <span>{item}</span>
        <button onChange={(e)=>removeHandler(item)}>Delete</button>
      </li>
      })}
    </ul>  
    </div>
    </div>
  );
}

export default App;
