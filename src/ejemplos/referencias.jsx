import React from 'react'
import { useState, useEffect,useRef } from "react";

export default function () {
    //Estados
    const[caracteres, setCaracteres] = useState(0)
    const[palabras, setPalabras] = useState(0)


//Referencias
const txtarea = useRef()



// Efectos
    const calcular =(e) =>{
        let texto = e.target.value
        setCaracteres(texto.length)
        setPalabras(texto.trim().split(' ').length)
    }

    const limpiar= (e)=>{
        setCaracteres(0)
        setPalabras(0)
        txtarea.current.value=''
        txtarea.current.focus()
        // txtarea.current.style.color = 'purple'
    }

    const pegar = (e) =>{
        navigator.clipboard.readText().then((text)=>{
            txtarea.current.value=text
            setCaracteres(text.length)
        setPalabras(text.trim().split(' ').length)

        })
        .catch((err)=>{

        })
    }

  return (
    <div>
        <div className='container'>
            <div className="row mt-5">
            <div className="col-md-10">
                <h1 className='text-left'>Palabras: {palabras},  Caracteres: {caracteres} </h1>
            </div>
            <div className="col-md-2 pt-3">
                <button className='btn btn-sm btn-success float-start' onClick={pegar}>Pegar</button>
                <button className='btn btn-sm btn-primary float-end' style={{float:'right'}} onClick={limpiar}>Limpiar</button>

            </div>

            </div>
            <div className="row ">
                <div className="col-md-12">
                    <textarea name="" id="" ref={txtarea} rows="10" className='form-control' onChange={calcular} ></textarea>
                </div>
            </div>
        </div>
    </div>
  )
}
