import React from 'react'

const List = props => (
    <ul>
        {
            this.props.pokemon.map(pokemon => {
                return <li
                    key={pokemon}
                    className="pokemon-name"
                    onClick={() => this.setState({ selectedPokemon: pokemon })}
                >{pokemon}</li>
            })
        }
    </ul>
)

export default List