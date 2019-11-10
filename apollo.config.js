module.exports = {
  client: {
    includes: ['./pages/**/*.tsx', './components/**/*.tsx', './helpers/**.*.tsx'],
    service: {
      name: 'scinapse',
      url: 'http://localhost:4000/graphql',
    },
  },
};
