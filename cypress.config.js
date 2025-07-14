const { defineConfig } = require("cypress");

module.exports = defineConfig({
    reporter: 'mochawesome',
    reporterOptions: {
      charts: true,
      overwrite: false, // Changed to false to avoid overwriting individual test reports
      html: true,
      json: true, // Changed to true to generate JSON files for merging
      reportDir: 'tests/cypress/reports', // Fixed path to match package.json scripts
      reportFilename: '[name].html',
    },
     
    chromeWebSecurity: false,
    // retries: 2,
    defaultCommandTimeout: 5000,
    watchForFileChanges: false,
    video: false, // Changed from 'videos' to 'video'
    screenshotOnRunFailure: false, // Changed from 'screenshots' to 'screenshotOnRunFailure'
    videosFolder: "tests/cypress/videos",
    screenshotsFolder: "tests/cypress/screenshots",
    fixturesFolder: "tests/cypress/fixtures", // Fixed typo: 'fixture' -> 'fixtures'
    e2e: {
        setupNodeEvents(on, config) {
            return require("./tests/cypress/plugins/index.js")(on, config);
        },
        experimentalStudio: true,
        baseUrl: "http://localhost:8000",
        specPattern: "tests/cypress/integration/**/*.cy.{js,jsx,ts,tsx}",
        supportFile: "tests/cypress/support/index.js",
    },
});