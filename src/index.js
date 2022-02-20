// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';

// Components & Modules
import App from './App';
import './index.css';

// Apollo/GraphQL client set up
const link = new HttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
    'Authorization': `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`
  }
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: link,
  cache: cache
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);