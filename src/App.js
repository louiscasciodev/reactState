import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {

  state = {
    turn: true,
  }

  handleChange = () => {
    this.setState(
      { turn: !this.state.turn })
  }

  render() {
    return (
      <div className="App">
        <div>
        <img src={logo} className=
          {this.state.turn ? 'App-logo' : 'App-logoTurn'} alt="logo" /></div>
        <button onClick={this.handleChange}>
          {this.state.turn ? 'Turn' : 'Stop'}
        </button>
      </div>)
  }
}

export default App;
