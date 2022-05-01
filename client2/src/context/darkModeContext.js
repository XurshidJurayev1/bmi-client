import { createContext, useReducer, useState } from "react";
import DarkModeReducer from "./darkModeReducer";


let width ;

const screenWidth = () => {
  const func = window.innerWidth
  if(func > 990){
    return width = true
  }else{
    return width = false
  }

}

screenWidth()

const INITIAL_STATE = {
  darkMode: false,
  sidebar: width,
};

export const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, sidebar: state.sidebar, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
