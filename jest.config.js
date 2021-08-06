module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts',],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    testMatch: [
        '**/?(*.)spec.ts?(x)'
    ],
    testEnvironment: 'jsdom',
};