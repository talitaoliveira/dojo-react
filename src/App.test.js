import { shallow, mount } from 'enzyme';
import React from 'react';
import App from './App';
import Header from './Header';
import List from './List';

const getWrapper = props => shallow(<App pokemon={['mewTwo']} {...props} />);

describe('App', () => {
  describe('header', () => {
    it('renders a header with a title', () => {
      const wrapper = getWrapper();
      expect(wrapper.find(Header).exists()).toBeTruthy();
      expect(wrapper.find(Header).props().title).toEqual('POKE');
    });
  });

  it('should have a list', () => {
    const wrapper = getWrapper();

    expect(wrapper.find(List)).toHaveLength(1);
  });

  describe('details', () => {
    describe('when I click on the Pokemon', () => {
      it('renders the pokemon details ', () => {
        const wrapper = mount(<App pokemon={['Pikachu']} />);
        wrapper
          .find('.item')
          .at(0)
          .simulate('click');

        expect(wrapper.find('.pokemon-detail').text()).toEqual('Pikachu');
      });
    });
  });
});
