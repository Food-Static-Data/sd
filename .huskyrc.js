//     "hooks": {
//       "pre-commit": "npm run clean && npm run formato",
//       "after": "lint-staged",
//       "then": "yarn precommit"
//     }
module.exports = {
  hooks: {
    "pre-commit": "npm run clean && npm run formato",
    after: "lint-staged -c lint-staged.config.js"
  }
};
