module.exports = {
    browser: true,
    transform: {
        '\\.(ts|js)$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
    },
    testRegex: 'test/.*\\.spec.(js|ts)$',
    collectCoverageFrom: [
        'src/**/*.{js,ts}',
    ],
    coveragePathIgnorePatterns: [
        '\\.mock\\.(js|ts)$',
        '\\.typedef\\.(js|ts)$',
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
