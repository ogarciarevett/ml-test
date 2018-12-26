import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import NavBar from './Navbar';

describe('NavBar Component', () => {
  let wrapper;
  const mockFunc = jest.fn();

  it('renders NavBar component without crashing', () => {
    wrapper = shallow(<NavBar />);
    expect(wrapper).toBeTruthy();
  });

  it.skip('submit', () => {
    const wrapper = shallow(<NavBar goToRoute={mockFunc} />);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'handleOnSubmit');
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(instance.handleOnSubmit).toHaveBeenCalledTimes(1);
  });
});
