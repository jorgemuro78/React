import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(function () {
  const horaActual = new Date().toLocaleTimeString();

  root.render(
    <>
      <h1>Hora Actual</h1>  
      <h2>{horaActual}</h2>
      <h3>By Jorge Hernández</h3>
    </>
  );//<---Renderiza TODA la interfaz gráfica
}, 1000);



