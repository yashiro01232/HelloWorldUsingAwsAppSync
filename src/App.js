import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AWSAppSyncClient from "aws-appsync"
import { ApolloProvider } from 'react-apollo';
import { AUTH_TYPE } from "aws-appsync/lib/link/auth-link"
import { Rehydrated } from "aws-appsync-react";
import AppSync from './AppSync.js'
import Hello from './Hello.js'

const client = new AWSAppSyncClient({
  url: AppSync.graphqlEndpoint,
  region: AppSync.region,
  auth: {
      type: AUTH_TYPE.API_KEY,
      apiKey: AppSync.apiKey
  }
});

class App extends Component {
  render() {
    return (
        <ApolloProvider client={client}>
            <Rehydrated>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">AWS AppSync says</h1>
                    </header>
                    <Hello />
                </div>
            </Rehydrated>
        </ApolloProvider>
    );
  }
}

export default App;
