import { useState, useEffect } from "react";

function App() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  /*
useEfect tiene un segundo parametro tal que:

1. Si es un arreglo vacio, entonces la funcion se ejecuta 1 unica vez (componentDidMount).
2. Si no se pasa el parametro entonces la funcion se ejecuta cada vez que se actualiza el estado (componentDidUpdate).
3. La funcion se ejecutara de acuerdo al cambio en las dependencias dentrro del arreglo.
*/
  useEffect(function () {
    setInterval(function () {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <>
      <h1>Hora Actual</h1>
      <h2>{currentTime}</h2>
      <h3>By Jorge Hernández</h3>
    </>
  );
}

export default App;
