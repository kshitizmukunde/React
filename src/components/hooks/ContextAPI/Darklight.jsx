import { createContext, use, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('dark');
    const handleToggleTheme = () => {
        return setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }; 
    return(
        <ThemeContext.Provider value={{ theme, handleToggleTheme }}>{children}</ThemeContext.Provider>
    );
};

// Creating a Component //
export const DarkLight = () => {

    const {theme, handleToggleTheme} = use(ThemeContext);

    return (
        <div className={`p-4 h-lvh flex flex-col justify-center items-center ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <h1 className={`my-4 text-xl ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}> Dark Light Mode Website </h1>
            <p className={`py-8 text-lg ${theme === 'light' ? 'text-red-500' : 'text-white'}`}> Hello!! My React v19 Fans</p>
            <button onClick={handleToggleTheme}>
                {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
        </div>
    )
}   