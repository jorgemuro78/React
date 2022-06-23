import React from "react";
import PropTypes from "prop-types";
import Dish from "./dish";
import Cutlery from "./cutlery";

class Tablecloth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 120,
      backgroundColor: "darksalmon",
    };
  }

  render() {
    return (
      <div
        className="tablecloth spaceAround"
        style={{
          height: this.props.height || this.state.height,
          backgroundColor:
            this.props.backgroundColor || this.state.backgroundColor,
        }}
      >
        <Cutlery />
        <Dish />
        <Cutlery />
      </div>
    );
  }
}

Tablecloth.propTypes = {
  height: PropTypes.number,
  backgroundColor: PropTypes.string,
};

export default Tablecloth;
