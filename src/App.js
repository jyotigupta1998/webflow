// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { AddToAction, RemoveTodoAction } from './actions';
// import './App.css';

// function App() {
//   const dispatch= useDispatch();
//   const [todo, setTodo] = useState();
//   const Todo = useSelector((state)=>state.Todo);

//   const {todos}=Todo;

// const handleSubmit=(e)=>{
//  e.preventDefault(e);
//  dispatch(AddToAction(todo))
// }

// const removeHandler=(e)=>{
//   dispatch(RemoveTodoAction(e))
// }
// console.log(todos)

//   return (
//     <div className="app">
//       <div className='header'>
//      <div><h2>Todo App</h2></div>
//      </div>
//        <div className='body'>
//      <form onSubmit={handleSubmit}>
//        <input name='todo' type='text' onChange={(e)=>setTodo(e.target.value)}  />
//        <button type='submit' >Go</button>
//     </form>
//     <ul>
//       {todos?.map((item,index)=>{
//      return( <li key={index+"listing"}>
//       <span><h5>{item}</h5></span>
//         <button style={{background:"black", color:"white"}} onClick={()=>removeHandler(item)}>Delete</button>
//       </li>)
//       })}
//     </ul>
//     </div>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_Cart, remove_Cart } from "./redux/action";

const App = () => {
  const results = useSelector((state) => state.cart);
  // console.log(results);
  const dispatch = useDispatch();

  console.log(results, "red");
  return (
    <div style={{ padding: 0, margin: 0, minHeight: "100vh" }}>
      <div
        className="header"
        style={{
          width: "100%",
          height: "20%",
          background: "grey",
          color: "white",
        }}
      >
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <li>Menu</li>
          <li>About</li>
          <li>Wishlist</li>
          <li>
            <button
              onClick={() =>
                dispatch(add_Cart({ id: new Date().getTime(), item: "nachos" }))
              }
            >
              Cart
            </button>
          </li>
        </ul>
      </div>
      <div className="continer">
        <ul>
          {results.map((i, j) => {
           return <li key={i.id}>{i.item + i.id} <button  onClick={() =>
            dispatch(remove_Cart(i.id))
          }>remove</button></li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
