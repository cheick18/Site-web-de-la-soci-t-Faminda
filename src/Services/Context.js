import React, { useState, createContext } from 'react';
import { useTranslation } from 'react-i18next';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
   const [name,setName]=useState('wague')
   const [Lname,setLName]=useState('cheick')
    return (
        <UserContext.Provider value={{name,Lname}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext; 
