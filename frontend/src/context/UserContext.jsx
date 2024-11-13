import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const ContextProvider = ({ children }) => {
    //user related
    const [user,setUser]=useState(null)
   
    const addUser = (user,token) => {
        localStorage.setItem('token',token);
        setUser(user)
    };

    const updateUser=(user)=>{
      setUser(user)
    }

    const deleteUser=()=>{
      setUser(null);
      localStorage.removeItem('token')
    }

    return (
        <UserContext.Provider value={{ user,addUser,updateUser,deleteUser }}>
            {children}
        </UserContext.Provider>
    );
};
