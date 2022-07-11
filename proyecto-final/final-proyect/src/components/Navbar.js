import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-lg bg-lg menu-fixed">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          <img src="logo-mdv.png" width="50" alt="" /> FMDV App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarToggleExternalContent"
        >
          <h5 className="text-lg h4"> CONTENIDO</h5>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                HOME
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Team ">
                EQUIPO PASTORAL
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Churchs">
                MISIONES
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                CONTACTO
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
