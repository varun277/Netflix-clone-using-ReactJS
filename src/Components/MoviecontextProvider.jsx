import React, { createContext } from 'react'
export const Moviecontext=createContext();


const MoviecontextProvider = (props) => {
  
  return (
    <Moviecontext.Provider>
      {props.children}
    </Moviecontext.Provider>

  )
}

export default MoviecontextProvider