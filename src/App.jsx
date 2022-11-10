import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="borrame-desde-aqui">
        <h1 className="text-3xl font-bold underline p-5">Hola mundo</h1>
        <h2 className="text-1xl">
          Plantilla para iniciar proyectos. Utilizando Vite & Tailwindcss
        </h2>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Cuenta en {count}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
