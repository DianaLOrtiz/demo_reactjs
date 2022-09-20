import { useState } from 'react'
import '../node_modules/jquery/dist/jquery.js'
import reactLogo from './assets/react.svg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import Navbar from './components/navbar'
import Tarjeta from './components/tarjeta'

function App() {
  const [count, setCount] = useState(0)
return(
  <div>
    <Navbar />
    <Tarjeta text='Hola'/>
    <h1>Hola Mundo</h1>
  </div>
  
)
}

export default App
