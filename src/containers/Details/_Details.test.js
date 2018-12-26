import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Details from './Details';

describe('Details Container', () => {
  it('renders Details component without crashing', () => {
    shallow(
      <MemoryRouter>
        <Details />
      </MemoryRouter>,
    );
  });
});
