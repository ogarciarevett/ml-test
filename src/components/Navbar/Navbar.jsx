import React, { Component } from "react";
import { Link } from "react-router-dom";
import { props } from "./Navbar.props";
import styles from "./Navbar.module.scss";
import logo from "../../assets/Logo_ML.png";
import icSearch from "../../assets/ic_Search.png";

class NavBar extends Component {
  state = {
    queryVal: this.props.searchVal || ""
  };

  handleOnChange = e => {
    const { value } = e.target;
    this.setState({ queryVal: value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const route = `/items?search=${this.state.queryVal}`;
    this.props.goToRoute(route);
  };

  render() {
    return (
      <div className={`${styles.NavBar} ${this.props.className}`}>
        <Link to="/">
          <img src={logo} className={styles.logo} alt="logo" />
        </Link>
        <form className={styles.searchForm} onSubmit={this.handleOnSubmit}>
          <input
            onChange={this.handleOnChange}
            className={styles.searchInput}
            value={this.state.queryVal}
            placeholder="Nunca dejes de buscar"
          />
          <button type="submit" className={styles.searchButton}>
            <img
              src={icSearch}
              alt="icon-search"
              className={styles.iconSearch}
            />
          </button>
        </form>
      </div>
    );
  }
}

NavBar.propTypes = props;

export default NavBar;
