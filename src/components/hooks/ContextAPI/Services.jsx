import { useBioContext } from "."

export const Services = () => {
    const {myName, myAge} = useBioContext();
    return(
        <h1> Hello This is Context API Using Custom Hooks, My Name is {myName} and my Age is {myAge}</h1>
    );
};