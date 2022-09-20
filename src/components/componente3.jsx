import React from 'react'
import { useState } from 'react'
export default function componente3() {
    const[contador, setContador] = useState(0)

    return (
    <div>
        <h1>Contador: {contador}</h1>
        <br />
        <button onClick={()=>{setContador(contador+1)}}>Click Me</button>
    </div>
  )
}
