module.exports = {
    transform: {
        '\\.(ts|js)$': 'ts-jest',
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
    },
    testEnvironment: 'jsdom',
    testRunner: 'jest-jasmine2'
};
