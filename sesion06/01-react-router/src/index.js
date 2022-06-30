import ReactDOM from "react-dom/client";
import "./index.css";
import Index from "./páges/index";
import About from "./páges/about";
import Test from "./páges/test";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * Brouser, define el estilo de navegación (en este caso es un estilo tradicional)
 *
 * Routes, permite agrupar rutas
 *
 * Route, es la definicion de una ruta (o URL)
 *
 *
 * path: Define la ruta de acceso para la pagina
 * element: El componente a utilizar como pagina
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Test />} />
    </Routes>
  </BrowserRouter>
);
