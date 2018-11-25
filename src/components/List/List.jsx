import React, { Component } from 'react';
import queryString from 'query-string';
import styles from './List.module.scss';

class List extends Component {
    componentDidMount() {
        const { search } = queryString.parse(this.props.location.search);
        if(search) this.props.fetchSearch(search);
    }
    render() {
        return(
            <div className={styles.List}>
                {this.props.items.length > 0 && (
                    this.props.items.map( x => <p key={x.id}>{x.title}</p>)
                )}
            </div>
        );
    }
}

export default List;
