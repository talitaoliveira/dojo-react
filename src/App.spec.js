import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('header', () => {
  it('renders one element header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('header')).toHaveLength(1);
  });
});