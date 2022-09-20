import React from "react";
import Tarjeta from "../components/tarjeta";
import { publicaciones } from "../constantes/publicaciones";

export default function propiedades() {
  console.log(publicaciones);
  return (
    <div>
      {publicaciones.map((elemento) => (
        <Tarjeta key = {elemento.id} title={elemento.title} votes ={elemento.votes} answers={elemento.answers} 
        user={elemento.user} views={elemento.views} etiquet={elemento.etiquet}
        />
      ))}
    </div>
  );
}
