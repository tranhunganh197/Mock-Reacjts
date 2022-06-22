export default {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    moduleDirectories: [
      "node_modules",
      "src"
    ],
    moduleNameMapper: {
      ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
      '^.+\\.svg$': 'jest-svg-transformer',
    },
    setupFilesAfterEnv: ['./src/setupTests.ts'],
    testEnvironment: "jsdom",
    verbose: true,
    testURL: "http://localhost/",
};