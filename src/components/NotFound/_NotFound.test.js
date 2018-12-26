import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import NotFound from './NotFoundMsj';

describe('NotFound Component', () => {
  it('renders NotFound component without crashing', () => {
    shallow(<NotFound />);
  });
});
