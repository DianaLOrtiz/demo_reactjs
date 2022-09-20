import React, {useState} from 'react'
import Navbar from "./components/navbar";
import axios from 'axios';

export default function Pagina2() {
  const [consulta, setConsulta] = useState([])


const consultar= ()=>{
axios.get('http://localhost:8000/json/10')
.then((response) => {
  console.log(response.data)
  setConsulta(response.data)
})
}


  return (
    <div>
      <Navbar/>
      <br />
      <br />
      <input type="number" name="" id="" />
      <button type="submit" onClick={consultar}>Enviar</button>
    <table className='table table-bordered'>
      <thead>
      <th>ID</th>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Edad</th>
      <th>Estatura</th>
      </thead>
      <tbody>
       {
        consulta.map((x)=>(
          <tr>
            <td>{x.id}</td>
            <td>{x.nombre}</td>
            <td>{x.apellido}</td>
            <td>{x.edad}</td>
            <td>{x.estatura}</td>

          </tr>
        ))
       }

      </tbody>
    </table>
    </div>
  )
}
