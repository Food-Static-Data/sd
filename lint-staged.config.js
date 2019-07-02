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
module.exports = {
  linters: {
    '**/*.+(js|json)': [
    //   'eslint --fix',
    //   'prettier --write',
    //   'jest --findRelatedTests',
      'npm run code-fix',
      'git add'
    ]
  },
  ignore: [
    '**/dist/*.js'
  ]
}
