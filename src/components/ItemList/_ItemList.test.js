import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ItemList from './ItemList';
import styles from './ItemList.module.scss';
import freeShippingIc from '../../assets/ic_shipping.png';

describe('ItemList Component', () => {
  it('renders ItemList component without crashing', () => {
    shallow(<ItemList />);
  });
  it('renders ItemList component with currency different', () => {
    shallow(<ItemList price={{ currency: 'US' }} />);
  });
  it('renders freeshipping icon if freeShipping prop its true', () => {
    const wrapper = shallow(<ItemList freeShipping />);
    const img = (
      <img
        className={styles.shippingIc}
        src={freeShippingIc}
        alt="free-shipping"
      />
    );
    expect(wrapper.contains(img)).toEqual(true);
  });
  it('should not freeshipping icon exists if freeShipping prop its false', () => {
    const wrapper = shallow(<ItemList />);
    const img = (
      <img
        className={styles.shippingIc}
        src={freeShippingIc}
        alt="free-shipping"
      />
    );
    expect(wrapper.contains(img)).toEqual(false);
  });
});
