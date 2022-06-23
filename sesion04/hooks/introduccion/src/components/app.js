import { useState } from "react";

function App() {
  /* Version larga pero entendible

  const state = useState(0);

  //Estado actual del componente
  const currentState = state[0];

  //Funcion para actualizar el estado
  const setState = state[1];

  function handleClick() {
    setState(currentState + 1);
  }
*/
  //Version real (utilizando el DESTRUCTURING)
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }

  console.log("Renderizando...");

  return (
    <div className="d-flex vw-100 vh-100 justify-content-center align-items-center">
      <div className="col-6 text-center">
        <h1 className="fs-1 text-danger fw-bold">{counter}</h1>
        <div className="d-grid gap-2 col-4 mx-auto mt-5">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleClick}
          >
            Click
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
