import { shallow } from 'enzyme'
import React from 'react'
import App from './App'
import Header from './Header'

describe('header', () => {
  it('renders a header with a title', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Header).exists()).toBeTruthy()
    expect(wrapper.find(Header).props().title).toEqual('POKE')
  })

})
