'use strict';

module.exports = {
  verbose: true,
  collectCoverageFrom: ["src/**"],
  coverageReporters: ["json", "lcov", "text-summary", "html"],
  testURL: "http://localhost",
  testPathIgnorePatterns: [
    "/lib/"
  ],
   moduleDirectories: ["node_modules"]
};
