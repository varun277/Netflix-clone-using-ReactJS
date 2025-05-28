import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';

export const ContextAPI = createContext()

const ContextProvider = ({children}) => {
    const [favouriteList,setFavouriteList]=useState([]);
    const providerValue={favouriteList,setFavouriteList};
  return (
    <ContextAPI.Provider value={providerValue}>
        {children}
    </ContextAPI.Provider>
  )
}

export default ContextProvider