import { useState, useEffect } from "react";

function App() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

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
