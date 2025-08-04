//? React Hook Challenge: Dynamic State Management and Document title Update with useEffect.

//* Description: In This Challenge, you'll create a React Component that dynamically manages state using "useState" and "useEffect hooks". Your component will include:

//? 1* A counter that increments when a button is clicked.
//? 2* An inpu field where users can type their names
//? 3* The Document title will update to show the current count.

import { useEffect, useState } from "react";
import "../UseEffect/index.css"

export const Challenge = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        console.log("Name: ", name);
    }, [name]);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count])
    return(
        <div className="container effect-container">
            <h1>useEffect Challenge</h1>
            <p>
                Count: <span>{count}</span>
            </p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>
                Name: <span>{name} </span>
            </p>
            <input type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)} />

        </div>
    );
};

