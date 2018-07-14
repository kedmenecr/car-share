import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';


export const client = new ApolloClient({
  link: new HttpLink({
    credentials: 'include',
    uri: process.env.REACT_APP_SERVER_URL,

  }),
  cache: new InMemoryCache()
});