import React from "react";

function Encuestas({ encuestas }) {
  return (
    <div>
      <h2>Encuestas Disponibles</h2>
      <ul>
        {encuestas.map((encuesta) => (
          <li key={encuesta.id} className="pregunta">
            <strong>{encuesta.pregunta}</strong>
            <ul>
              {encuesta.opciones.map((opt) => (
                <li key={opt}>{opt}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Encuestas;
