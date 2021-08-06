module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true,
        'jest/globals': true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
        'plugin:jest/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/display-name': 'off',
        'no-var': 2,
        'no-undef': 2,
        'no-param-reassign': 2,
    },
    overrides: [
        {
            files: ['*.tsx'],
            rules: {
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/explicit-module-boundary-types': 'off',
                '@typescript-eslint/no-empty-function': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
            },
        },
        {
            files: ['*.ts'],
            rules: {
                '@typescript-eslint/no-empty-function': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
            },
        },
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/explicit-function-return-type': 'off',
            },
        },
    ],
};
