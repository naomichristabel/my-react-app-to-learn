import React, { useState } from 'react'
import classes from './Counter.module.css'

const Counter = () => {

    const [counterValue, setCounterValue] = useState(1);

    const handleIncrement = () => {
      setCounterValue(prevCount => prevCount + 1)
    }
  
    const handleDecrement = () => {
      setCounterValue(prevCount => prevCount - 1)
    }
  
    const handleReset = () => {
      setCounterValue(0)
    }

  return (
    <>
    <div className={classes.counterMain}>
    <h1>COUNTER VALUE: </h1>
    <h1>{counterValue}</h1>
    </div>

    <div>
    <button onClick={handleIncrement}>+</button>
    <button onClick={handleDecrement}>-</button>
    <button onClick={handleReset}>Reset</button>
    </div>
    </>
  )
}

export default Counter
