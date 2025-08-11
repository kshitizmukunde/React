import { useBioContext } from ".";

export const Home = () => {
    const {myName, myAge} = useBioContext();
    return <h1>Hello Context API!, My name is {myName} and my Age is {myAge}</h1>
};