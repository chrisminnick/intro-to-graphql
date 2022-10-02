import './App.css';
import { useQuery, gql } from '@apollo/client';
import CodersList from './components/CodersList';
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
  {
    console.log(data);
  }
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className="App">
      <CodersList coders={data.coders} />
    </div>
  );
}

export default App;
