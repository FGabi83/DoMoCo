import { ApolloProvider } from '@apollo/client';
import createApolloClient from '../lib/withData';
import { useState } from 'react';

export default function MyApp({ Component, pageProps }) {
  const [client] = useState(() => createApolloClient());

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}