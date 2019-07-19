// {
//   "*.js": ["eslint --fix", "git add"]
// }
// module.exports = {
//   linters: {
//     '**/*.+(js|md|ts|css|sass|less|graphql|yml|yaml|scss|json|vue)': [
//       'eslint --fix',
//       'prettier --write',
//       'jest --findRelatedTests',
//       'git add',
//     ],
//   },
// };

// Custom Ignore
// const micromatch = require('micromatch')
// module.exports = {
//   '*.js': files => {
//     // from `files` filter those _NOT_ matching `*test.js`
//     const match = micromatch.not(files, '*test.js')
//     return match.map(file => `eslint ${file}`)
//   }
// }

module.exports = {
  '**/*.+(js|json)': [
    //   'eslint --fix',
    //   'prettier --write',
    //   'jest --findRelatedTests',
    'npm run code-fix',
    'git add'
  ]
}
