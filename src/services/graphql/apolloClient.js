import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    lotacao: localStorage.getItem('lotacao'),
    authorization:  `Bearer ${localStorage.getItem('token')}`
  }
}));

const httpLink = createHttpLink({
  uri: 'http://master.saj6.softplan.com.br/apollo'
});

const cache = new InMemoryCache({
  addTypename: false
});

const apolloClient = new ApolloClient({ 
  link: authLink.concat(httpLink),
  cache
});

export default apolloClient;