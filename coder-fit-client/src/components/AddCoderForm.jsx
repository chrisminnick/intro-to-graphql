import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';
const ADD_CODER = gql`
  mutation AddCoderMutation($name: String!, $description: String!) {
    addCoder(name: $name, description: $description) {
      code
      success
      message
      coder {
        id
        name
        description
      }
    }
  }
`;
function AddCoderForm() {
  const [newCoder, setNewCoder] = useState({
    name: '',
    description: '',
  });

  const [addCoder] = useMutation(ADD_CODER, {
    variables: { name: newCoder.name, description: newCoder.name },
    // to observe what the mutation response returns
    onCompleted: (data) => {
      console.log(data);
    },
  });

  return (
    <div className="add-coder">
      <h2>Add Coder</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addCoder();
        }}
      >
        <input
          type="text"
          placeholder="Coder Name"
          value={newCoder.name}
          onChange={(e) => {
            setNewCoder({ ...newCoder, name: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Coder Description"
          value={newCoder.description}
          onChange={(e) => {
            setNewCoder({ ...newCoder, description: e.target.value });
          }}
        />
        <button type="submit">Add Coder</button>
      </form>
    </div>
  );
}

export default AddCoderForm;
