import React from 'react';
import './List.css';

const List = props => (
  <ul className="list">
    {this.props.pokemon.map(pokemon => {
      return (
        <li
          key={pokemon}
          className="pokemon-name"
          onClick={() => this.setState({ selectedPokemon: pokemon })}
        >
          {pokemon}
        </li>
      );
    })}
  </ul>
);

export default List;
