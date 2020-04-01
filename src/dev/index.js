import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../lib/core/App';

import { ToastProvider } from '@bayon/commons';

import { ApolloProvider } from 'react-apollo';
import apolloClient from '../lib/services/graphql/apolloClient';

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <ToastProvider maxSnack={3}>
      <App />
    </ToastProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
