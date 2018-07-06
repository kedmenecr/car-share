import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';


export const client = new ApolloClient({
  link: new HttpLink({
    credentials: 'include',
    uri: 'https://localhost:4000'

  }),
  cache: new InMemoryCache()
});