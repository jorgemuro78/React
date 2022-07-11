import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <footer id="contacto">
      <div className="footer-content">
        <div className="contact-us">
          <h2 className="brand">Fundacion Manantial de vida</h2>
          <p>Todos los derechos reservados @2022/Jorge Hernandez Developer</p>
        </div>
        <div className="social-media">
          <Link to="" className="social-media-icon">
            <FontAwesomeIcon
              icon={faBell}
              to="https://www.facebook.com/profile.php?id=1003705468"
            />
          </Link>
          <Link to="./" className="social-media-icon">
            <i className="fa-solid fa-bell"></i>
          </Link>
          <Link to="./" className="social-media-icon">
            <i className="bx bxl-instagram"></i>
          </Link>
        </div>
      </div>
      <div className="line"></div>
    </footer>
  );
};
export default Footer;
