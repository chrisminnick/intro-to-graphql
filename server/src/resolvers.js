const resolvers = {
  Query: {
    coders: (_, __, { dataSources }) => {
      return dataSources.coderAPI.getAllCoders();
    },
    activities: (_, __, { dataSources }) => {
      return dataSources.coderAPI.getAllActivities();
    },
    coder: (_, { id }, { dataSources }) => {
      return dataSources.coderAPI.getCoder(id);
    },
    activity: (_, { id }, { dataSources }) => {
      return dataSources.coderAPI.getActivity(id);
    },
  },
};

module.exports = resolvers;
