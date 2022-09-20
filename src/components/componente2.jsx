import React from "react";
import { useState, useContext } from "react";
import { ContadorContext } from "../context/ContadorContext";
export default function componente2() {
  const { contador, setContador } = useContext(ContadorContext);

  return (
    <div>
      <h1>contador2:{contador}</h1>
      <br />
      <button
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        Presionar
      </button>
    </div>
  );
}
