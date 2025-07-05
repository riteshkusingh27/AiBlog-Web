//   share the global state  to all the componenets 

import {createContext , useContext} from 'react'

const appContext = createContext()

export const AppProvider = ({children})=>{
    const value = {}

    return (
        
        <appContext.Provider vaue = {value}>
            {children}
        </appContext.Provider>
    )
    
}

export const useAppContext = () =>{
    return useContext(appContext)
}