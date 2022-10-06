const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const CoderAPI = require('./datasources/coder-api');

const mocks = {
  Query: () => ({
    coders: () => [...new Array(6)],
  }),
  Coder: () => ({
    id: () => '1',
    name: () => 'Peter Lundlehart',
    description: () => 'A coder who codes.',
    activities: () => [1],
  }),
  Activity: () => ({
    id: () => '1',
    name: () => 'Coding',
    description: () => 'Coding is fun',
  }),
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ coderAPI: new CoderAPI() }),
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at http://localhost:4000
  `);
});
