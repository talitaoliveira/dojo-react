import React from 'react';
import List from './List';
import { shallow } from 'enzyme';

const getWrapper = props => shallow(<List pokemon={['mewTwo']} {...props} />);

describe('list', () => {
  it('renders the pokemon list', () => {
    const wrapper = getWrapper({ pokemon: ['Pikachu', 'Mew'] });

    expect(
      wrapper
        .find('.item')
        .at(0)
        .text()
    ).toEqual('Pikachu');

    expect(
      wrapper
        .find('.item')
        .at(1)
        .text()
    ).toEqual('Mew');
  });

  describe('when click on the pokemon name', () => {
    it('should call function', () => {
      const onClick = jest.fn();
      const pokemonName = 'Pedrochu';
      const wrapper = getWrapper({ onClick, pokemon: [pokemonName] });

      wrapper
        .find('.item')
        .at(0)
        .simulate('click');

      expect(onClick).toHaveBeenCalledWith(pokemonName);
    });
  });
});
