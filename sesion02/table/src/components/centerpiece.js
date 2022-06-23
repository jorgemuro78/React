import React from "react";
import Flower from "./flower";

const Centerpiece = () => {
  return (
    <div className="centerpiece">
      <div className="with100 spaceAround">
        <Flower />
      </div>
      <div className="wdth70 spaceAround">
        <Flower />
        <Flower />
      </div>
    </div>
  );
};

export default Centerpiece;
