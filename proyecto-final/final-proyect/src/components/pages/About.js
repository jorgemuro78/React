import React from "react";
import Carousel from "../carousel/Carousel";

const About = () => {
  return (
    <div className="contaniner">
      <Carousel />

      <h3>Nuestra Misión vision</h3>
      <p>
        Predicar el Evangelio del reino de Jesucristo, engendrando discípulos
        con naturaleza divina, a fin de recobrar el gobierno de Dios en cada
        persona, familia y nacion de la tierra
      </p>
      <h3>
        Fundacion Manantial de Vida, es una comunidad de esperanza fundada en
        las enseñanzas de Jesucristo para servirte a ti y tu familia, con la
        esperanza de que encuentres esa respuesta que tanto anhelas.
      </h3>
      <h2>Mateo 28:19-20</h2>
      <p className="h4">
        Por lo tanto, id y haced discípulos a todas las naciones, bautizándolos
        en el nombre del Padre, y del Hijo, y del Espíritu Santo, enseñandoles
        que guarden todas las cosas que os he mandado.
      </p>
    </div>
  );
};

export default About;
