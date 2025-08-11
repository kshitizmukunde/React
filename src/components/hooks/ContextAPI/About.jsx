import { use, useContext } from "react";
import { BioContext, useBioContext } from "."

export const About = () => {
    // const {myName, myAge} = useBioContext();
    // const {myName, myAge} = useContext(BioContext);
    // const {myName, myAge} = use(BioContext);

    const newHook = true;
    let myName, myAge;
    if (newHook) {
        ({ myName, myAge } = useContext(BioContext));
    }


    return(
        <h1>Hello Contect (About), My name is {myName} and my age is {myAge}</h1>
    )
}