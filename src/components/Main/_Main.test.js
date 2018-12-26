import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import NavBar from '../../containers/Navbar';
import Main from './Main';

describe('Main Component', () => {
  it('renders main component without crashing', () => {
    shallow(<Main />);
  });

  it('renders NavBar component without crashing', () => {
    const wrapper = shallow(<Main />);
    const nav = <NavBar />;
    expect(wrapper.contains(nav)).toBe(true);
  });
});
