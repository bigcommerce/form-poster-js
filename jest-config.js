module.exports = {
    browser: true,
    testRegex: 'test/.*\\.spec.js$',
    collectCoverageFrom: [
        'test/**/*.js',
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
