import React, { useState } from 'react'
import classes from './Counter.module.css'

const CounterChild = ( props ) => {

    const [counterValue, setCounterValue] = useState(1);

    const handleIncrement = () => {
      setCounterValue(prevCount => prevCount + 1)
      props.onIncrement(counterValue)
    }
  
    const handleDecrement = () => {
      setCounterValue(prevCount => prevCount - 1)
      props.onDecrement(counterValue)
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

    <p className={classes.dummy}>{props.dummy}</p>
    </>
  )
}

export default CounterChild
