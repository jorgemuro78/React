import React from "react";
import Death from "./death";

class App extends React.Component {
  state = {
    counter: 0,
  };

  //1er etapa del ciclo de vida
  //Creqacion del componente en memoria
  constructor(props) {
    super(props);
    console.log("1. Constructor");
  }

  //2nda etapa de ciclo de vida
  //Antes de la renderizacion por primera vez del componente
  componentWillMount() {
    console.log("2. componentWillMount");
  }

  //3er etapa del coiclo de vida
  // Renderizar la UI (se repite cada vez que se actualiza el estado o los props)
  render() {
    console.log("*Renderizando...");
    return (
      <>
        <h1>Hello World!</h1>;
        <button onClick={() => this.handleClick()}>
          Click{this.state.counter}
        </button>
        {this.state.counter % 2 === 0 ? <Death /> : null}
      </>
    );
  }

  //4ta etapa del ciclo de vida
  //Despues de la PRIMER renderizacion del componente
  componentDidMount() {
    console.log("4. componentDidMount");
  }
  //5to etapa del ciclo de vida
  //Despues de  l renderizado cuando se actualiza el estado
  componentDidUpdate() {
    console.log("6. componentWillUnmount");
  }

  //Esto no tiene que ver con ciclo de vida
  //Es ejemplo
  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }
}

export default App;
