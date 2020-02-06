import { shallow } from 'enzyme'
import React from 'react'
import Header from './Header'

describe('Header', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Header title="RAFINHA"/>)
    });

    it('should have a title', () => {
        expect(wrapper.text()).toEqual('Pokedex RAFINHA')
    })

    it('should have an input', () => {
        expect(wrapper.find('input')).toHaveLength(1)
    });

    describe('when change input value', () => {

        it('should update the title keeping the prefix', () => {
            const input = wrapper.find('input');
            input.simulate('change', { target: { value: 'Juliana' } });

            expect(wrapper.text()).toEqual('Pokedex Juliana');
        });
    })
})
