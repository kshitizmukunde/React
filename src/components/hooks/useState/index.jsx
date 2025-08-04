import { useState } from "react";
import "../../hooks/Hooks.css"

export const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
        console.log("Inner " + count);
    }

    console.log("Outer " + count);

    return (
        <div className="container state-container" style={{textAlign: "center" }}>
            <h1>useState Hook!</h1>
            <br/>
            <p>{count}</p>
            <button onClick={handleIncrement} className="state-button">Increment</button>
        </div>
    );
};