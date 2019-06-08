// at this file we'll run nodejs command
var shell = require('shelljs')
const _ = require('lodash')

// @TODO add here all new generated at generator files too
// @TODO looks like jsonlint doesnt called without build... strange
const jsonFiles = require('./src/files.js')

// each can be used instead of forEach
// @TODO replace with lodash
_.forEach(Object.keys(jsonFiles), function (key) {
  try {
    shell.exec('jsonlint ' + jsonFiles[key], { silent: true })
  } catch (e) {
    console.log(e)
  }

  // // Run external tool synchronously
  // if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
  //   shell.echo('Error: Git commit failed');
  //   shell.exit(1);
  // }
})

// Check if path exist
// @TODO lodash
Object.keys(jsonFiles).forEach(function (key) {
  if (shell.test('-e', jsonFiles[key])) {
    // console.log("File exist " + jsonFiles[key]);
  } else {
    // console.log("File doesn't exist " + jsonFiles[key]);
  }
})
