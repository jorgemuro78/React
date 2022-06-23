import React from "react";
import Tablecloth from "./tablecloth";

const treeTablecloth = () => {
  return (
    <div className="width100 spaceAround">
      <Tablecloth backgroundColor="green" height={100} />
      <Tablecloth />
      <Tablecloth backgroundColor="purple" height={75} />
    </div>
  );
};

export default treeTablecloth;
