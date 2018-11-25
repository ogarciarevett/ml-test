import React, { Component } from 'react';

class Details extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        if(id) this.props.fetchDetails(id);
    }
    render() {
        return (
            <div> details </div>
        );
    }
}

export default Details;
