import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterAction } from '../store/actions';

const Counter = (props) => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counterReducer)
    // console.log("count", count);

    const increment = () => {
        dispatch(counterAction.counterIncrement())
    }
    const decrement = () => {
        dispatch(counterAction.counterDecerment())
    }
    return (
        <div>
            <h2>Counter</h2>
            <button onClick={decrement}> - </button>
            <br />
            <span>{count.count}</span>
            <br />
            <button onClick={increment}> + </button>
        </div>
    )
}
export default Counter