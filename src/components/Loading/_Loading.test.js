import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { ClipLoader } from 'react-spinners';
import Loading from './Loading';

describe('Loading Component', () => {
  it('renders Loading component without crashing', () => {
    shallow(<Loading />);
  });
  it('renders ClipLoader component if the loading props its true', () => {
    const wrapper = shallow(<Loading loading />);
    const loaderLib = (
      <ClipLoader sizeUnit={'px'} size={150} color={'#3483fa'} loading />
    );
    expect(wrapper.contains(loaderLib)).toEqual(true);
  });
});
