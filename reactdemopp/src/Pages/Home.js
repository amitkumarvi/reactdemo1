import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../store'


const Home = () => { 
const counter = useSelector((state)=>state.counter);
const dispatch = useDispatch(actions.increment());

const increment = () =>{
    dispatch(actions.increment());
}

const decrement = () =>{
    dispatch(actions.decrement());
}



    return (
         <div>
                <h2>{counter}</h2>        
                <button onClick={increment}>click me</button>    
                <button onClick={decrement}>click me</button>    
        </div>  
         )
}

export default Home