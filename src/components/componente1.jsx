import React from 'react'
import { useState, useContext } from 'react'
import { ContadorContext } from '../context/ContadorContext'


export default function componente1() {
    const{contador, setContador,aumentar}=useContext(ContadorContext)
  return (
    <div>
        <h1>contador1:{contador}</h1>
        <br />
        <button onClick={aumentar}>Presionar</button>
    </div>
  )
}
