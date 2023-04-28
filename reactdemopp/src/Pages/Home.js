import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../store/counter-slice';
// import products from "./products.json";






const Home = () =>{
  
    const count = useSelector((state) =>  state.count.counter)
    const dispatch = useDispatch();
    
    const increment = () => {
      dispatch(actions.increment());
    };
  
    const decrement = () => {
      dispatch(actions.decrement());
    };
    
    const addBy = () => {
        dispatch(actions.addBy(10));
    }

    return (
      <div>
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={addBy}>add by 10</button>
      </div>
    );
  }
  
  export default Home;
  