import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { endpoint } from '../config';

export default function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: endpoint,
      credentials: 'include',
    }),
    cache: new InMemoryCache(),
  });
}