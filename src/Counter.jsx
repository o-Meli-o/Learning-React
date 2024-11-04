import { useState } from "react"
import './Counter.css'

function Counter(){
    const [number, setNumber] = useState(0);
    
    const increaseNum = () => {
        setNumber(number + 1);
    }
    const resetNum = () => {
        setNumber(0);
    }
    const decreaseNum = () => {
        setNumber(number - 1);
    }
    return(
        <div id="countainer">
            <h1>{number}</h1>
            <button className="btn" onClick={increaseNum}>Increase</button>
            <button className="btn" onClick={resetNum}>Reset</button>
            <button className="btn" onClick={decreaseNum}>Decrease</button>
        </div>
    )
}
export default Counter