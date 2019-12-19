import React from 'react'
import './App.css'
import List from './List'
import Header from './Header'
import Example from './Example'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

class App extends React.Component {
  state = {
    selectedPokemon: ''
  }

  render () {
    return (
      <div className='App'>
        <Router>
          <Header title='POKE' />
          <List />
          <Switch>
            <Route path='/example'>
              <Example />
            </Route>
          </Switch>
          <div className='pokemon-detail'>{this.state.selectedPokemon}</div>
        </Router>
      </div>
    )
  }
}

App.defaultProps = {
  pokemon: []
}

export default App
