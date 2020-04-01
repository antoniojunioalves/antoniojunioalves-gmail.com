import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './core/App';

import { ToastProvider } from '@bayon/commons';

import { ApolloProvider } from 'react-apollo';
import apolloClient from './services/graphql/apolloClient';

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <ToastProvider maxSnack={3}>
      <App />
    </ToastProvider>
  </ApolloProvider>, 
document.getElementById('root'));
