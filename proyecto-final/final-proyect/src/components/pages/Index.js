import Carousel from "../carousel/Carousel";
import React from "react";
import Mision from "../carousel/Mision";
const Index = () => {
  return (
    <section className="contenedor sombra">
      <div className="contaniner">
        <Carousel />

        <div className="box">
          <h3>ESCUELA "L B S"</h3>
        </div>
        <Mision />
      </div>
    </section>
  );
};

export default Index;
