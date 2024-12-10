// src/components/Partidas.jsx

import React, { useState } from "react";

// Array de las partidas
const ArrayPartidas = [
  { nick: "Player1", puntos: 100, fecha: "2024-12-09" },
  { nick: "Player2", puntos: 200, fecha: "2024-12-08" },
  { nick: "Player3", puntos: 120, fecha: "2024-12-07" },
];



//funcion para ordenar los datos de la columna


export function TablaPartidas() {
  // Usamos useState dentro del componente para manejar el estado de las partidas
  const [puntosJugadores, setPuntosJugadores] = useState(ArrayPartidas);
  const [ordenAsc, setOrdenAsc] = useState(true);

  // Función para ordenar los datos de la columna "Puntos"
  const ordenarPuntos = () => {
    const puntosOrdenados = [...puntosJugadores].sort((a, b) => {
      return ordenAsc ? a.puntos - b.puntos : b.puntos - a.puntos;
    });
    setPuntosJugadores(puntosOrdenados); // Actualizar el estado con las partidas ordenadas
    setOrdenAsc(!ordenAsc); // Alternar la dirección del orden
  };

  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>
            Nick
            <button className="btn btn-sm btn-link" onClick={ordenarPuntos}>
              ↕
            </button>
          </th>
          <th>
            Puntos
            <button className="btn btn-sm btn-link">↕</button>
          </th>
          <th>
            Fecha
            <button className="btn btn-sm btn-link">↕</button>
          </th>
        </tr>
      </thead>
      <tbody>
        {puntosJugadores.map((partida, index) => (
          <tr key={index}>
            <td>{partida.nick}</td>
            <td>{partida.puntos}</td>
            <td>{partida.fecha}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TablaPartidas;



/*
APUNTES--------

es un hook de React que te permite crear y manejar el estado dentro 
de un componente funcional. Con él, puedes almacenar 
valores que cambian con el tiempo, como la información de 
la interfaz o el resultado de una acción del usuario,
 y actualizarlos cuando sea necesario.

*/ 