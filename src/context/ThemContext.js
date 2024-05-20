"use client"
import { createContext, useState } from "react"   //hook from react
export const ThemContext=createContext()

export const Any=({children})=>{
  const [mode,setMode]=useState("dark")
  const toggle=()=>{
    setMode(x=>(x==="dark"?"light":"dark"))
  }
  return(
  <ThemContext.Provider value={{toggle,mode}}>
<div className={ `theme ${mode}`}>
    {children}
    </div>
  </ThemContext.Provider>
  )
}

