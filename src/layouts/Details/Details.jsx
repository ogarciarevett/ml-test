import React, { Component } from "react";
import { parseAmount, parseDecimals } from "../../utils/parser";
import { props } from "./Details.props";
import styles from "./Details.module.scss";

class Details extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) this.props.fetchDetails(id);
  }
  render() {
    if (this.props.loading) return <p>Loading</p>;
    const { details } = this.props;
    return (
      <div className={styles.Details}>
        <div className={styles.detailsProduct}>
          <img
            src={details.picture}
            alt={details.id}
            className={styles.detailsPicture}
          />
          <div className={styles.desc}>
            <h1 className={styles.descriptionTitle}>
              {" "}
              Descripción del producto{" "}
            </h1>
            <p className={styles.description}>{details.description}</p>
          </div>
        </div>
        <div className={styles.detailsInfo}>
          <p className={styles.conditions}>
            {details.condition === "new" ? "Nuevo" : "Usado"} -{" "}
            {details.sold_quantity} vendidos
          </p>
          <p className={styles.title}>{details.title}</p>
          {details.price && (
            <p className={styles.detailsPrice}>
              {details.price.currency === "ARS" ? "$ " : "$USD"}
              {parseAmount(details.price.amount)}
              <span>{parseDecimals(details.price.decimals)}</span>
            </p>
          )}
          <button className={styles.buyBtn}>Comprar</button>
        </div>
      </div>
    );
  }
}

Details.propTypes = props;

export default Details;
