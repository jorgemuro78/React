import { useState } from "react";
import Button from "react-bootstrap/Button";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();

    if (username === "admin" && password === "password") {
      alert("Bienvenido Administrador");
    } else {
      alert("Usuario o contraseña invalidos");
    }
  }

  return (
    <div className="wrapper">
      <div className="container">
        <h1>Bienvenido</h1>
        <h3>Ingresa usuario y contraseña para iniciar sesión</h3>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre de usuario"
            onChange={handleUsernameChange}
          />
          <input
            type="password"
            placeholder="Contraseña"
            onChange={handlePasswordChange}
          />
          <Button type="submit" id="login-button">
            Enviar
          </Button>
        </form>
      </div>

      <ul className="bg-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default App;
