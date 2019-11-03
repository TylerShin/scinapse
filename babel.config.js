const presets = [
  '@babel/react',
  [
    '@babel/preset-env',
    {
      modules: false,
      loose: true,
      useBuiltIns: 'usage',
      corejs: 2
    },
  ],
];

const plugins = [
  'react-hot-loader/babel',
]

module.exports = { presets, plugins };
