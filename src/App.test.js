import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

import React from 'react';
import App from './App';

configure({ adapter: new Adapter() });
describe('header', () => {
  it('renders one element header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('header')).toHaveLength(1);
  });
});