import React from 'react';
import InputContainer from './InputContainer'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
 shallow(<InputContainer />);
})

it('should render one form', () => {
 const wrapper = shallow(<InputContainer />);
 const form = wrapper.find('.get-number-form');
 expect(form.exists()).toEqual(true);
})

it('should render input box', () => {
 const wrapper = shallow(<InputContainer />);
 const input = wrapper.find('.get-number-input');
 expect(input.exists()).toEqual(true);
})

it('should render text displaying input', () => {
 const wrapper = shallow(<InputContainer />);
 const displayText = wrapper.find('.display-input-text');
 expect(displayText.exists()).toEqual(true);
})

it('it should display input default state', () => {
 const wrapper = shallow(<InputContainer />);
 const displayText = wrapper.find('.display-input-text')
 expect(displayText.text()).toEqual("0");
})

it('should have a number state', () => {
 const wrapper = shallow(<InputContainer />);
 const state = wrapper.state();
 expect(state.number).toEqual(0);
})

it('should update state on input change', () => {
 const wrapper = shallow(<InputContainer />);
 const state = wrapper.state();

 const input = wrapper.find('.display-input-text');
 input.value = 10;


 expect(state.number).toEqual(input.text())
})
