import { useState } from "react";
import { FcExpand, FcCollapse, FcSynchronize } from "react-icons/fc";
import "./App.css";

function App() {
  const [contador, setContador] = useState(0);
  let estiloBoton =
    "bg-white text-black font-bold text-3xl shadow m-2 px-8 py-4 rounded-lg";

  return (
    <div className="App w-screen h-screen flex flex-col items-center justify-center text-center">
      <div className="container">
        <h1 className="text-black text-9xl text-center leading-none">{contador}</h1>
      </div>
      <div className="container">
        <button
          className={estiloBoton}
          onClick={() => setContador((contador) => contador - 1)}
        >
          <FcExpand />
        </button>
        <button
          className={estiloBoton}
          onClick={() => setContador((contador) => (contador = 0))}
        >
          <FcSynchronize />
        </button>
        <button
          className={estiloBoton}
          onClick={() => setContador((contador) => contador + 1)}
        >
          <FcCollapse />
        </button>
      </div>
    </div>
  );
}

export default App;
