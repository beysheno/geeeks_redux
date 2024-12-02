import React from 'react';
import {useDispatch, useSelector} from "react-redux";


const Counter = () => {

    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    const increment = () => {
        dispatch({
            type: "INCREMENT",
        });
    }
    const decrement = () => {
        dispatch({
            type: "DECREMENT",
        })
    }
    const incrementTo10 = () => {
        dispatch({
            type: "INCREMENT_TO10",
        })
    }
    const decrementTo10 = () =>{
        dispatch({
            type: "DECREMENT_TO10",
        })
    }
    const reset = () => {
        dispatch({
            type: "RESET",
        })
    }
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={incrementTo10}>+10</button>
            <button onClick={decrementTo10}>-10</button>
            <button onClick={reset}>RESET</button>
        </div>
    );
};

export default Counter;