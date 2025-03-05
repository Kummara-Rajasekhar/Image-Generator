import { Children, createContext, useState } from "react";

export const AppContext=createContext()

const AppContextProvider=(props)=>{
    const [user,setuser]=useState(null);
    const [showlogin,setshowlogin]=useState(false);

    const value={
        user,
        setuser,
        showlogin,
        setshowlogin,
        

    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider
