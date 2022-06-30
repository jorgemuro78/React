import React from "react";
import PropTypes from "prop-types";

class Name extends React.Component {
  componentDidMount() {
    alert("Te damos la bienbenida" + this.props.name);
  }

  componentWillUnmount() {
    alert("Adios");
  }

  render() {
    return (
      <div>
        {this.props.name}
        <button onClick={this.props.deleteNameList}>x</button>
      </div>
    );
  }
}

Name.propTypes = {
  nombre: PropTypes.string.isRequired,
  deleteNameList: PropTypes.func.isRequired,
};

export default Name;
