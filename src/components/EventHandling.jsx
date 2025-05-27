import "./EV.css";

export const EventHandling = () => {

    const handleButtonClick = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.type);
        alert("Hey I am on Onclick Event!");
    }

    const handleWelcomeUser = (user) => {
        console.log(`Hey ${user}, Welcome`);
    }

    return (
        <>
        {/* // ? Function Components with Named Functions */
        /* Remember how we haven't call this function here then it will run
        withouy even clicking. You Just need to pass the reference and not call
        here. */}
           <button onClick={handleButtonClick}>Click Me</button>
           <br />
           {/* In React, event handlers receive the event object as an argument by default. However, when you use an arrow function directly in the onClick attribute without passing the event explicitly, React doesn't pass the event object to your handler function. This is beacause the arror function creates a new function and calls your handler without passing any arguments.  */}
           {/* <button onClick={() => handleButtonClick(event)}>Click Me</button> */} 
           <button onClick={(event) => handleButtonClick(event)}>Click Me</button>
           <br />
            {/* {//? Function Components with Inline Arrow functions} */}
            <button onClick={() => alert("Hey I am Inline Event Function")}>Inline Arr Function</button>
            {/* Passing Arguments to Events handlers */}
            {/* <button onClick={handleWelcomeUser("kshitiz")}>click me</button> */}
            <button onClick={() => handleWelcomeUser("kshitiz")}>click me</button>

        </>
    )
}