import { useState } from "react";
import "./index.css";

export const LoginFormReact = () => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({...prev, [name]: value}))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const myName = user.username;
        const myPassword = user.password;

        console.log(`The User name is ${myName} and the password is ${myPassword}`)
    }

    return (
        <div className="container">
            <div className="card">
                <h1>Login Form</h1>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text"
                    name="username" 
                    required 
                    autoComplete="off"
                    value={user.username} 
                    onChange={handleInputChange}
                    />

                    <label htmlFor="password">Password</label>
                    <input type="password" 
                    name="password" 
                    required 
                    autoComplete="off"
                    value={user.password} 
                    onChange={handleInputChange}
                    />

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};