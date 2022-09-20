import React from "react";
import { useState, useEffect } from "react";

export default function efectos() {

    const [usuario, setUsuario] = useState('')
    const [passwd, setPasswd] = useState('')
    
    const obtusuario = (e) =>{
        setUsuario(e.target.value)
    }
    const obtpass = (e) =>{
        setPasswd(e.target.value)
    }

    useEffect(()=>{
        alert('hola')
    },[])

 useEffect(()=>{
        if (usuario == 'admin' && passwd=='admin') {
            alert('Usuario/Contrasena Correctos '+usuario+' '+passwd);
        }
    },[usuario,passwd])
   
  return (
    <div>
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-md-4"></div>
          <div className="col-md-4 mt-5">
            <div className="card">
                <div className="card-body">
                    <h3>Iniciar Sesion</h3>
                    <input type="text" name="" id="" className="form-control" placeholder="User" onChange={obtusuario}/>
                    <br />
                    <input type="password" name="" id="" className="form-control" placeholder="password" onChange={obtpass}/>
                    <br />
                    <button className="btn btn-success btn-block d-none">Aceptar</button>
                </div>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
}
