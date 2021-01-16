module.exports = function () {

  return {
    files: ['./src/*.js'],
    tests: ['__tests__/*.js'],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest'
  };
};
