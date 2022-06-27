import { useEffect, useState } from "react";

/*
useEfect se ocupa para realizar cambios "side-efect":
1. Actualizar el estado
2. Modificar el DOM
3. Integrar algun plugin o herramienta

componentWillMount x
componentDidMount ?
componentDodUpdate x
componentWillUnmount
*/
function App() {
  // ...<----componentWillMount
  // ...<----componentDidUpdate
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    //Esta funcion se actualiza despues de cada renderizado
    console.log("Despues del renderizado");
  }, []);

  const esMayor = counter > 10;

  useEffect(() => {
    console.log(counter);
  }, [esMayor]);
  //[false] -> [true]
  // El segundo parametro es un arreglo de "dependencias"
  // Cuando una de las dependencias es modificada, entonces se ejecuta la funcion

  console.log("Renderizado...");

  return (
    <>
      <h1>Clicks: {counter}</h1>
      <button
        type="button"
        class="btn btn-success btn-lg"
        onClick={() => setCounter(counter + 1)}
      >
        +
      </button>
      <button
        type="button"
        class="btn btn-danger btn-lg"
        onClick={() => setCounter(counter - 1)}
      >
        -
      </button>
    </>
  ); //<- render
}

export default App;
