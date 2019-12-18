import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List'
import Header from './Header'

class App extends React.Component {
  state = {
    selectedPokemon: ''
  }

  render() {
    return (
      <div className="App">
        <Header title="POKE" />
        <List/>
        <div className="pokemon-detail">{this.state.selectedPokemon}</div>
      </div>
    );
  }
}

App.defaultProps = {
  pokemon: []
}

export default App;
