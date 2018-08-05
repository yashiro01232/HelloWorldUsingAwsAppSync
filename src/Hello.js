import React, { Component } from 'react';
import { graphql } from "react-apollo";
import gql from 'graphql-tag'

const query = gql`query { hello }`;

class Hello extends Component {
    render() {
        return (
            <p>
                { this.props.data.hello }
            </p>
        );
    }
}

export default graphql(query, {
    options: { fetchPolicy: 'cache-and-network' }
})(Hello);