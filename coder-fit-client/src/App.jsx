import './App.css';
import { useQuery, gql } from '@apollo/client';
import CodersList from './components/CodersList';
import AddCoderForm from './components/AddCoderForm';

const CODERS = gql`
  query coders {
    coders {
      id
      name
      description
    }
  }
`;
function App() {
  const { loading, error, data } = useQuery(CODERS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className="App">
      <CodersList coders={data.coders} />
      <AddCoderForm />
    </div>
  );
}

export default App;
