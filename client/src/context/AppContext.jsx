import { Children, createContext, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'


export const AppContext=createContext()

const AppContextProvider=(props)=>{
    const [user,setuser]=useState(null);
    const [showlogin,setshowlogin]=useState(false);
    const [token,settoken]=useState(localStorage.getItem('token'))
    const [credit,setCredit]=useState(false)

    const loadCreditsData=async()=>{
        try{
            const {data}=await axios.get(backendUrl+'/api/user/credits',{headers:token})

            if(data.success){
                
            }

        }catch(error){
            console.log(error)
            toast.error(error.message)
        }
    }


    const backendUrl=import.meta.env.BACKEND_URL
    const value={
        user,
        setuser,
        showlogin,
        setshowlogin,
        backendUrl,
        token,
        settoken,
        credit,
        setCredit,

        

    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider
