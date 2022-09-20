import  React, {useState} from "react";

import Navbar from "./components/navbar";

export default function Pagina() {
    const [usuario, setUser] = useState('')
    const [passw, setPass] = useState('')

    const login =()=>{
        alert('Hola '+usuario +'@'+passw)
    }

  return (
<div>
<Navbar/>
        <br />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="jumbotron">
                <h4>Login</h4>
              <div className="row">
                
              </div>
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <input type="text" name="" id="usuario"  className="col-11" onChange={(e)=>setUser(e.target.value)}/>
                    <br />
                    <br />
                    <input type="text" name="" id="passw"  className="col-11" onChange={(e)=>setPass(e.target.value)}/>
                    <br />
                    <br />
                    <input type="submit" value="Enviar" onClick={login}/>
                </div>
                <div className="col-md-2"></div>

              </div>
              <div className="row">
                
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}
