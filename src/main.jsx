import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Navbar from "./components/navbar";
import Pagina from "./Pagina";
import Pagina2 from "./Pagina2";
import Estados from "./ejemplos/estados";
import Efectos from "./ejemplos/efectos";
import Referencias from "./ejemplos/referencias";
import Propiedades from "./ejemplos/propiedades";
import Contexto from "./components/componente1";
import Contexto1 from "./components/componente2";
import { ContadorProvider } from "./context/ContadorContext";
import Contexto2 from './components/componente3'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/pagina" element={<Pagina />} />
      <Route path="/pagina2" element={<Pagina2 />} />
      <Route path="/ejemplo1" element={<Estados />} />
      <Route path="/ejemplo2" element={<Efectos />} />
      <Route path="/ejemplo3" element={<Referencias />} />
      <Route path="/ejemplo4" element={<Propiedades />} />
      <Route
        path="/context"
        element={
          <div>
            <ContadorProvider>
              <Contexto />
              <hr />
              <Contexto1 />
            </ContadorProvider>
            <Contexto2/>

          </div>
        }
      />
      
    </Routes>
  </BrowserRouter>
);
