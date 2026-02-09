import React, { Children } from 'react'
import { createContext,useContext,useState } from "react";

//create context
const AuthContext = createContext(null);

//provider function
export const AuthProvider = ({children})=>{
    const [user,setUser] = useState(null)

    const login = (name)=>{
        setUser({name})
    }

    const logout = ()=>{
        setUser(null)
    }
}

function AuthContext() {
  return (
    <div>
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
      
    </div>
  )
}

export default AuthContext
