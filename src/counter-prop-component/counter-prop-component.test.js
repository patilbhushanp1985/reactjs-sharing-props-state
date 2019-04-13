import React from 'react';
import { shallow } from 'enzyme';
import CounterPropComponent from './counter-prop-component';

describe('<CounterPropComponent />', () => {
  test('renders', () => {
    const wrapper = shallow(<CounterPropComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
