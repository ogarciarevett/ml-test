import React from "react";
import { Link } from 'react-router-dom';
import { props } from "./ItemList.props";
import styles from "./ItemList.module.scss";
import freeShippingIc from "../../assets/ic_shipping.png";

const ItemList = props => (
  <li className={styles.ItemList}>
    <Link to={`items/${props.id}`}>
        <img
        className={styles.ItemImg}
        src={props.picture}
        alt={`${props.id}-img`}
        />
    </Link>
    <div className={styles.itemDetails}>
      <div className={styles.priceContainer}>
        <Link to={`items/${props.id}`} className={styles.price}>
          {props.price.currency === "ARS" ? "$ " : "$USD"} {props.price.amount}
        </Link>
        {props.freeShipping ? (
          <img
            className={styles.shippingIc}
            src={freeShippingIc}
            alt="free-shipping"
          />
        ) : null}
      </div>
      <p className={styles.title}>{props.title}</p>
    </div>
  </li>
);

ItemList.propTypes = props;

export default ItemList;