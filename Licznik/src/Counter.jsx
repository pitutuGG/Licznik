import { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const handleIncrease = () => {
        setCounter(counter + 1)
    }

    const handleDecrease = () => {
        setCounter(counter - 1)
    }

    return (
        <div className="counter">
            <h1>{counter}</h1>
            <div>
                <button onClick={handleIncrease}>+</button>
                <button onClick={handleDecrease}>-</button>
            </div>
        </div>
    )
}

export default Counter