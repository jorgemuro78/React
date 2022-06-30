import React from "react";
import Name from "./name";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      message: "",
      nameList: ["Bedu"]
    };
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.state.nameList !== prevState.nameList) {
            this.setState({
                message:'Longitud de la lista es: ${this.state.nameList.length}'
            })
        }
    }
};

  handleImputChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleClick = () => {
    const stateName = this.state.name;
    if (!stateName) return;

    const updateList = [...this.state.updateList, stateName];

    this.setState({
      name: "",
      nameList: updateList,
    });
};
  
deleteNameList = (key) => {
    const copyList = [...this.state.nameList];
    copyList.splice(key, 1);

    this.setState({
        nameList: copyList
    });
};
  render () {
    return (
        <div className="margin">
            {this.state.message}
            <br />
            <input
                value={this.state.name}
                onChange={this.handleImputChange}
            />
            <button onClick={this.handleClick}
            >
                Agregar
            </button>

        <ul>
          {this.state.nameList.map((name, key) => (
            <li key={key}>
                  <Name
                      name={name}
                      deleteNameList={() => this.deleteNameList(key)}
                  />
            </li>
          ))}
        </ul>
      </div>
    );
  }

export default App;
