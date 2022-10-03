import './App.css';
import { useQuery, gql } from '@apollo/client';
import CodersList from './components/CodersList';
import AddCoderForm from './components/AddCoderForm';

export const CODERS_QUERY = gql`
  query coders {
    coders {
      id
      name
      description
    }
  }
`;
function App() {
  const { loading, error, data } = useQuery(CODERS_QUERY);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className="App">
      <AddCoderForm />

      <CodersList coders={data.coders} />
    </div>
  );
}

export default App;
