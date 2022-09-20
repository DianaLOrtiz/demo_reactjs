import React, { useState } from "react";

export default function estados() {
    const [texto, setTexto] = useState('')
    
    const [selector,setSelector] = useState('')

    const [check,setCheck] = useState(false)

    const[radio, setRadio] =  useState(null)

    const select=(e)=>{
      setSelector(e.target.value)
    }

    const checkear =(e)=>{
      setCheck(e.target.checked)
    }

   


  return (
    <div>
      <br />
      <div className="container">
        <div className="col-md-5">
          <input type="text" name="" id="texto" className="form-control" onChange={(e)=>{setTexto(e.target.value)}}/>
          <br />
          <select name="" id="" className="form-control" onChange={select}>
            <option value="america">America</option>
            <option value="europa">Europa</option>
            <option value="asia">Asia</option>
            <option value="antartida">Antartida</option>
          </select>
          <br />
          <input type="checkbox" name="txt" id="" onChange={checkear}/> Click Me

          <br />
          <br />
          <div onChange={(e)=>{setRadio(e.target.value)}}>
          <input type="radio" name="rbtn" id="" value='uno'/> Uno
          <br />
          <input type="radio" name="rbtn" id="" value='dos'/> Dos
          <br />
          <input type="radio" name="rbtn" id="" value='tres'/> Tres
          </div>
          <br />
          <br />
          <button className="btn btn-success">Boton</button>
          <h1>{texto}</h1>
          <h1>{selector}</h1>
          <h1>{check?'true':'false'}</h1>
          <h1>{radio}</h1>
          <h1></h1>
        </div>
      </div>
    </div>
  );
}
