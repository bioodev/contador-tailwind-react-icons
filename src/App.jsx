import { useState } from "react";
import { FcExpand, FcCollapse, FcSynchronize } from "react-icons/fc";
import "./App.css";

function App() {
  const [contador, setContador] = useState(0);
  let estiloBoton =
    "bg-white hover:shadow-md hover:bg-yellow-100 hover:scale-125 active:bg-red-300 active:shadow-xl active:scale-150 duration-300 text-black font-bold text-3xl shadow m-2 px-8 py-4 rounded-lg";

  return (
    <div className="App w-screen h-screen flex flex-col items-center justify-center text-center">
      <div className="container">
        <h1 className="text-black text-9xl text-center leading-none duration-500 ">{contador}</h1>
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
