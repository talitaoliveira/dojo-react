import React from 'react';
import './List.css';
import './Item.css';

const List = ({ pokemon, onClick }) => {
  return (
    <ul className="list">
      {pokemon.map(poke => {
        return (
          <li key={poke} className="item" onClick={() => onClick(poke)}>
            {poke}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
