import React, { Component } from 'react';
import ItemList from '../../components/ItemList';
import Loading from '../../components/Loading';
import NotFoundMsj from '../../components/NotFound/NotFoundMsj';
import { props, defaultProps } from './List.props';
import styles from './List.module.scss';

class List extends Component {
  state = {
    search: this.props.searchVal,
  };
  static getDerivedStateFromProps(props, state) {
    if (props.searchVal !== state.search) {
      props.fetchSearch(props.searchVal);
      return { search: props.searchVal };
    }
    return null;
  }
  componentDidMount() {
    if (this.props.searchVal || this.props.searchVal === '')
      this.props.fetchSearch(this.props.searchVal);
  }
  render() {
    if (this.props.loading) return <Loading loading={this.props.loading} />;
    return (
      <ul className={`${styles.List} ${this.props.className}`}>
        {this.props.items.length > 0 && !this.props.errorSearch ? (
          this.props.items.map(x => (
            <ItemList
              id={x.id}
              key={x.id}
              title={x.title}
              price={x.price}
              picture={x.picture}
              freeShipping={x.free_shipping}
              address={x.address}
            />
          ))
        ) : (
          <NotFoundMsj />
        )}
      </ul>
    );
  }
}

List.propTypes = props;
List.defaultProps = defaultProps;

export default List;
