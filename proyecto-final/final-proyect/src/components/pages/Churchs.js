import React from "react";
import BackToTopButton from "../BackToTopButton";

export const Churchs = () => {
  return (
    <section className="contenedor sombra">
      <h2>Iglesias & Misiones</h2>
      <div className="container">
        <div className="section">
          <h3>FMDV Cd. Juarez</h3>
          <img
            src="img/er.jpeg "
            alt="foto "
            width="100px"
            height="100px"
            className="iconos"
          />
          <p>
            Lorem imcoemepsum dolor sit amet consectetur adipisicing elit. Omnis
            recusandae tempora, esse nesciunt dolorem commodi!
          </p>

          <h3>FMDV Querétaro</h3>
          <img
            src="img/alberto.jpeg "
            alt="foto "
            width="100px"
            height="100px"
            className="iconos"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            recusandae tempora, esse nesciunt dolorem commodi!
          </p>
          <h3>FMDV San Luis Potosi</h3>
          <img
            src="img/uriel.jpeg "
            alt="foto "
            width="100px"
            height="100px"
            className="iconos"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            recusandae tempora, esse nesciunt dolorem commodi!
          </p>
          <h3>FMDV Quintana Roo</h3>
          <img
            src="img/jorge.jpg "
            alt="foto "
            width="100px"
            height="100px"
            className="iconos"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            recusandae tempora, esse nesciunt dolorem commodi!
          </p>
          <h3>FMDV Mision Yucatan</h3>
          <img
            src="img/tixca.jpg "
            alt="foto "
            width="100px"
            height="100px"
            className="iconos"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            recusandae tempora, esse nesciunt dolorem commodi!
          </p>
        </div>
      </div>
      <BackToTopButton />
    </section>
  );
};

export default Churchs;
