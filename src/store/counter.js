import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByamount } from './counterSlice';

const Counter = () => {

  const count = useSelector(state => state.counter.value);
  console.log("Count",count);

  const dispatch = useDispatch();

  return (
    <>
       <h1>Counter Value : {count}</h1>
       <button onClick={()=>dispatch(increment())}>Increment</button>
       <button onClick={()=>dispatch(decrement())}>Decrement</button>
       <button onClick={()=>dispatch(incrementByamount(6))}>IncrementByAmount</button>
    </>
  )
}

export default Counter