module.exports = {
    env: {
        'browser': false,
        'es2021': true,
        'jest/globals': true
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    overrides: [],
    ignorePatterns: ['.eslintrc.js', 'tsconfig.json', 'jest.config.js', 'dist', 'node_modules', 'coverage'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint'],
    rules: {}
};

