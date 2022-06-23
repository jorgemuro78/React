import React from "react";

class Button extends React.Component {
  /*
  constructor(props) {
    super(props); // Invocado el constructor de la clase padre (React.Component)
    console.log(props);
  }
*/
  render() {
    const estilos = {
      backgroundColor: this.props.color || "white",
    };
    return <Button style={estilos}>{this.props.text || "un boton"}</Button>;
  }
}

export default Button;
