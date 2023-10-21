import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <h2>{ count }</h2>
            <button onClick={() => setCount(count-1)}><span className="bigFont">-</span></button> 
            <button onClick={() => setCount(count+1)}><span className="bigFont">+</span></button>
        </div>
    )
};

export default Counter;