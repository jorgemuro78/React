import React from "react";
import TowTablecloth from "./towTablecloth";
import TreeTablecloth from "./treeTablecloth";
import Centerline from "./centerline";

const table = () => {
  return (
    <div id="table" className="spaceAround">
      <TreeTablecloth />
      <Centerline />
      <TowTablecloth />
    </div>
  );
};

export default table;
