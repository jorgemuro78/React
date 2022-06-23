import React from "react";
import PropTypes from "prop-types";
import LuzMercurial from "./LuzMercurial";

const FocoMercurial = (props) => {
  return (
    <div className="FocoMercurial">
      <LuzMercurial color={props.color} />
    </div>
  );
};

FocoMercurial.propTypes = {
  color: PropTypes.string,
};

export default FocoMercurial;
