import { shallow } from 'enzyme'
import React from 'react'
import Header from './Header'

describe('header', () => {
    it('header has a title', () => {
        const wrapper = shallow(<Header title="RAFINHA"/>);
        const title = wrapper.text();
        expect(title).toEqual('RAFINHA');
    })
})