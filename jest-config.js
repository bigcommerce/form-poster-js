module.exports = {
    browser: true,
    transform: {
        '\\.(ts|js)$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
    },
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
    ],
    testRegex: 'test/.*\\.spec.ts$',
    collectCoverageFrom: [
        'src/**/*.ts',
    ],
    coveragePathIgnorePatterns: [
        '\\.mock\\.ts$',
        '\\.d\\.ts$',
    ],
    coverageThreshold: {
        global: {
            branches: 90,
            functions: 90,
            lines: 90,
            statements: 90,
        },
    }
};
