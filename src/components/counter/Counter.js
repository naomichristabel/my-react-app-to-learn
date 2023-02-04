import React, {useState} from 'react'
import classes from './Counter.module.css'
import CounterChild from "./CounterChild";

const Counter = () => {
    const [finalCount, setFinalCount] = useState(1);
    const handleIncrement = (counter) => {
        setFinalCount(counter + 1)
    }
    const handleDecrement = (counter) => {
        setFinalCount(counter - 1)
    }
    return (
        <>
            <p className={classes.counterParent}>{`Value of the final counter from child is: ${finalCount}`}</p>
            <CounterChild onIncrement={handleIncrement} onDecrement = {handleDecrement} dummy='Just some random text here...he he he'/>
        </>
    )
}

export default Counter
