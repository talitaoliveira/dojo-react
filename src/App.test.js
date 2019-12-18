import { shallow } from 'enzyme'
import React from 'react'
import App from './App'
import List from './List'
import Header from './Header'

const getWrapper = (props) => shallow(
  <App pokemon={[]}
    {...props}
  />
)

describe('header', () => {
  it('renders a header with a title', () => {
    const wrapper = getWrapper()
    expect(wrapper.find(Header).exists()).toBeTruthy()
    expect(wrapper.find(Header).props().title).toEqual('POKE')
  })
})

describe('list', () => {
  it('renders the pokemon list', () => {
    const wrapper = getWrapper({ pokemon: ['Pikachu', 'Mew'] })
    expect(wrapper.find('.pokemon-name').at(0).text()).toEqual('Pikachu')
    expect(wrapper.find('.pokemon-name').at(1).text()).toEqual('Mew')
  })
  it('renders the pokemon list component', () => {
    const wrapper = getWrapper({ pokemon: ['Pikachu', 'Mew'] })
    expect(wrapper.find(List).exists()).toBeTruthy()
  })
})

describe('details', () => {
  describe('when I click on the Pokemon', () => {
    it('renders the pokemon details ', () => {
      const wrapper = getWrapper({ pokemon: ['Pikachu', 'Mew'] })
      wrapper.find('.pokemon-name').at(0).simulate('click')
      expect(wrapper.find('.pokemon-detail').text()).toEqual('Pikachu')
    })
  })
})
