import React, { Component } from 'react'
import axios from 'axios'
import './Item.css'

const PokemonList = ({ pokemons }) => {
  return pokemons.map((pokemon, index) => {
    const key = `pokemon_item_${index}`
    return (
      <div className='item' key={key}>{pokemon.name}</div>
    )
  })
}

export default class Example extends Component {
  state = {
    pokemons: []
  }

  componentDidMount () {
    axios.get('https://pokeapi.co/api/v2/pokemon').then((response) => {
      this.setState({ pokemons: response.data })
    })
  }

  render () {
    const { pokemons } = this.state
    const pokemonResults = pokemons && pokemons.results

    return pokemonResults ? <PokemonList pokemons={pokemonResults} /> : <div>loading...</div>
  }
}
