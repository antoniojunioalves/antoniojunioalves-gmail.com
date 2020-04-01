import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';

const lotacao = localStorage.getItem('lotacao');
const token = localStorage.getItem('token');
const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    lotacao,
    authorization: `Bearer ${token}`
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
