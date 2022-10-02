const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    coders: [Coder]
    coder(id: ID!): Coder
    activities: [Activity]
    activity(id: ID!): Activity
  }

  """
  A coder is a person who writes code and does activities.
  """
  type Coder {
    id: ID!
    name: String!
    description: String
    activities: [Activity]
  }

  """
  An activity is a thing that a coder does.
  """
  type Activity {
    id: ID!
    name: String!
    description: String
  }
`;
module.exports = typeDefs;
