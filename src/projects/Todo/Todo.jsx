import { useState } from "react";
import "./Todo.css";

export const Todo = () => {

    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]); 

    const handleClickChange = (value) => {
        setInputValue(value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if(!inputValue) return;

        if(task.includes(inputValue)) return;

        setTask((prevTask) => [...prevTask, inputValue]);

        setInputValue("");
    }

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
            </header>
            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text" className="todo" autoComplete="off" value={inputValue} onChange={(event) => handleClickChange(event.target.value)}/>
                    </div>
                    <button type="submit" className="todo-btn">Add Task</button>
                </form>
            </section>
              
        </section>
    )
}