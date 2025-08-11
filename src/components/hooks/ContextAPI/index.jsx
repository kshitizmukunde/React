import { createContext, use } from "react";


// 1. First Step: Create Context and first letter of Context Component's name must always be Capital
export const BioContext = createContext();

// 2. Second Step: Provider is the property of Context Component, we pass the value to the provider, which makes it accesible to the child Components. The value should be passed inside double curly braces {{}} if it's more than one.
export const BioProvider = ({children}) => {
    const myName = "kshitiz";
    const myAge = 27;
    return <BioContext.Provider value={{myName, myAge}}>{children}</BioContext.Provider>
}



// Custom Hooks //
export const useBioContext = () => {
    const context = use(BioContext);
    if(context === undefined){
        throw new Error("Component Must be Wrapped with BioProvider");
    };
    return context;
}

