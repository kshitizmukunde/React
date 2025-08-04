import { useState } from "react";


const ShortCircuitExample = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [user, setUser] = useState("");

    return (
        <section className="container short-container">
            <h1>Welcome to the ShortCircuit Evaluation!</h1>
 
            {isLoggedIn && <p>You are Logged In!</p>}

            {user ? `Hello ${user}` : "Please Log In!"}
            <div className="grid-three-cols">
                <button onClick={() => {setIsLoggedIn(!isLoggedIn)}}>Toggle Login State</button>
                <button onClick={() => {setUser("kshitiz Mukunde")}}>Set User</button>
                <button onClick={() => {setUser("")}}>Clear User</button>
            </div>
        </section>
    )
}
export default ShortCircuitExample;