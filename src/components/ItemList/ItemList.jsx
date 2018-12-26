import React from 'react';
import { Link } from 'react-router-dom';
import { props, defaultProps } from './ItemList.props';
import styles from './ItemList.module.scss';
import freeShippingIc from '../../assets/ic_shipping.png';

const ItemList = props => (
  <Link to={`items/${props.id}`} className={styles.linkContainer}>
    <li className={styles.ItemList}>
      <img
        className={styles.ItemImg}
        src={props.picture}
        alt={`${props.id}-img`}
      />
      <div className={styles.itemDetails}>
        <div className={styles.priceContainer}>
          <p className={styles.price}>
            {props.price.currency === 'ARS' ? '$ ' : '$USD'}{' '}
            {Math.ceil(props.price.amount)}
          </p>
          {props.freeShipping ? (
            <img
              className={styles.shippingIc}
              src={freeShippingIc}
              alt="free-shipping"
            />
          ) : null}
        </div>
        <p className={styles.addressInfo}>{props.address}</p>

        <p className={styles.title}>{props.title}</p>
      </div>
    </li>
  </Link>
);

ItemList.propTypes = props;
ItemList.defaultProps = defaultProps;
export default ItemList;
