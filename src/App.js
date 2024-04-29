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

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_Cart, remove_Cart } from "./redux/action";
import { product_List } from "./redux/Product/productaction";
import { Button, Card, Pagination } from "antd";

const App = () => {
  const results = useSelector((state) => state.cart);
  const product = useSelector((state) => state.product.products) || [];

  const dispatch = useDispatch();
  const pageSize = 4;

  let [showProduct, setShowProduct] = useState({ product: 0, cart: 0 });
  const onShowSizeChange = (page, type) => {
    type === 1
      ? setShowProduct({ ...showProduct, product: pageSize * (page - 1) })
      : setShowProduct({ ...showProduct, cart: pageSize * (page - 1) });
  };

  useEffect(() => {
    dispatch(product_List());
  }, [dispatch]);

  
  return (
    <div style={{ padding: 0, margin: 0, minHeight: "100vh", display:"flex" }}>
        <div className="continer">
        <h1>Product list</h1>
        <ul>
          {product
            .slice(showProduct?.product, showProduct?.product + 4)
            .map((i, j) => {
              return (
                <Card key={i.id}>
                  <h4> Name: {i.title}</h4>
                  <h4>Price: {i.price}</h4>
                  <Button onClick={() => dispatch(add_Cart(i))}>
                    Add
                  </Button>{" "}
                </Card>
              );
            })}
        </ul>
        <Pagination
          // showSizeChanger
          onChange={(page) => onShowSizeChange(page, 1)}
          defaultCurrent={1}
          pageSize={4}
          total={product.length}
        />
      </div>
    
      <div className="continer">
        <h1>cart list</h1>
        <ul>
          {results
            .slice(showProduct?.cart, showProduct?.cart + 4)
            .map((i, j) => {
              console.log(i);
              return (
                <Card key={i.id}>
                  <h4> Name: {i.title}</h4>
                  <h4>Price: {i.price}</h4>
                  <h4>Quantity: {i.ProductQuantity}</h4>
                </Card>
              );
            })}
        </ul>
        <Pagination
          onChange={(page) => onShowSizeChange(page, 2)}
          defaultCurrent={1}
          pageSize={4}
          total={results.length}
        />
      </div>

  
    </div>
  );
};

export default App;
