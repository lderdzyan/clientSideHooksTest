/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  // Collect coverage info
  collectCoverage: true,
  coverageDirectory: 'coverage',

  // Enforce minimum coverage
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 85,
      lines: 85,
      statements: 85,
    },
  },

  // Match only test files
  testMatch: ['**/?(*.)+(spec|test).[tj]s'],
};
