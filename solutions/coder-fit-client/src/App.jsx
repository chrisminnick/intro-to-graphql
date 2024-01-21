import { useQuery, gql } from '@apollo/client';
import AddCoderForm from './AddCoderForm';
export const CODERS_QUERY = gql`
  query Coders {
    coders {
      id
      name
      description
      activities
    }
  }
`;
function App() {
  const { loading, error, data } = useQuery(CODERS_QUERY);
  if (loading) return 'Loading...';

  return (
    <>
      {data.coders.map((coder) => (
        <div key={coder.id}>{coder.name}</div>
      ))}
      <AddCoderForm />
    </>
  );
}

export default App;
