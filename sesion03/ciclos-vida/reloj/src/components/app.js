import React from "react";

class App extends React.Component {
  state = {
    horaActual: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    setInterval(() => {
      console.log("Actualizando el reloj");
      this.setState({ horaActual: new Date().toLocaleTimeString() });
    }, 1000);
  }
  render() {
    return (
      <>
        <h1>Hora Actual</h1>
        <h2>{this.state.horaActual}</h2>
        <h3>By Jorge Hernández</h3>
      </>
    );
  }
}

export default App;
