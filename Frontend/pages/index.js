import { gql, useQuery } from '@apollo/client';

const TEST_QUERY = gql`
  query {
    __typename
  }
`;


export default function Home() {
  const { data, loading, error } = useQuery(TEST_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return <p>Apollo works: {data.__typename}</p>;
}