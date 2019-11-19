module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  rootDir: '',
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  moduleNameMapper: {
    '^lodash-es$': '<rootDir>/node_modules/lodash/index.js',
  },
  testRegex: '__tests__/.*_spec.tsx$',
};
