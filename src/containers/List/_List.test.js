import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import List from './List';

describe('List Container', () => {
  it('renders List component without crashing', () => {
    shallow(<List />);
  });
});
