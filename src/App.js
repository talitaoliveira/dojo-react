import React from 'react';
import './App.css';
import Header from './Header';
import List from './List';
import axios from 'axios';

class App extends React.Component {
  state = {
    selectedPokemon: ''
  };

  render() {
    return (
      <div className="App">
        <Header title="POKE" />
        <List
          pokemon={this.props.pokemon}
          onClick={selectedPokemon => this.setState({ selectedPokemon })}
        />
        <div className="pokemon-detail">{this.state.selectedPokemon}</div>
      </div>
    );
  }
}

App.defaultProps = {
  pokemon: []
};

export default App;
