import "./App.css";
import Encuestas from "./components/Encuestas";
import { useState } from "react";

function App() {
  const encuestas = [
    {
      id: 1,
      pregunta: "¿Cuál es tu color favorito?",
      opciones: ["Rojo", "Azul", "Verde"],
    },
    {
      id: 2,
      pregunta: "¿Cuál es tu comida favorita?",
      opciones: ["Pizza", "Hamburguesa", "Sushi"],
    },
  ];
  const [useEncuestas, setUseEncuestas] = useState(encuestas);

  return (
    <div className="App">
      <h1>Aplicación de Encuestas</h1>
      <Encuestas encuestas={useEncuestas} />
    </div>
  );
}

export default App;
