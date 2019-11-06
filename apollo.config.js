module.exports = {
  client: {
    service: {
      name: 'neo-scinapse',
      localSchemaFile: './schema.json',
    },
    includes: ['./pages/**/*.tsx', './components/**/*.tsx'],
  },
};
