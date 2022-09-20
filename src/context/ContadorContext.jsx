import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'



//Context
const ContadorContext = createContext()

const ContadorProvider =({children})=>{
    //estados
    const[contador,setContador]= useState(0)

    const aumentar =()=>{
        setContador(contador+1)
    }

    const data = {contador,setContador,aumentar}
    return(
        <ContadorContext.Provider value={data}>
            {children}
        </ContadorContext.Provider>
    )
}

export {ContadorContext, ContadorProvider}