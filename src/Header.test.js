import { shallow } from 'enzyme'
import React from 'react'
import Header from './Header'

describe('header', () => {
  it('should have a title', () => {
    const wrapper = shallow(<Header title="RAFINHA" />)
    const title = wrapper.text()
    expect(title).toEqual('RAFINHA')
  })

  it('should have an input', () => {
    const wrapper = shallow(<Header />)

    expect(wrapper.find('input')).toHaveLength(1)
  })
})
