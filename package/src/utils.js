import fs from "fs";
import PATH from "path";
import _ from "lodash";
import jsonFiles from "./files";

// @TODO find out what methods are actually copy from generator module
// and can be deleted here and reimported from it

/**
 * fixPath()
 * @param {String} path
 */
function fixPath(path) {
  path = PATH.resolve(__dirname, path);
  if (path.charAt(path.length - 1) !== "/") path += "/";
  return path;
}

/**
 * For readAllFiles()
 * @param {String} path
 */
function readAllFiles(path) {
  const content = [];
  path = fixPath(path);
  const files = fs.readdirSync(path);
  files.forEach(file => {
    const fileStat = fs.statSync(path + file).isDirectory();
    if (file.slice(-5) === ".json") {
      if (!fileStat) {
        let data = fs.readFileSync(path + file);
        data = JSON.parse(data);
        content.push(data);
      }
    }
  });
  return content;
}

/**
 * For getListContent()
 * @param {String} path
 * @param {String} fileName
 */
function getListContent(path, fileName = "undefined") {
  if (fileName === "undefined") {
    // read all files
    return readAllFiles(path);
  }
  // read specified file
  let data = fs.readFileSync(path + fileName);
  data = JSON.parse(data);
  return data;
}

/**
 * For getList()
 * @param {String} path
 */
function getList(path) {
  const list = [];
  const files = fs.readdirSync(path);
  files.forEach(file => {
    const fileStat = fs.statSync(path + file).isDirectory();
    if (!fileStat) {
      list.push(file);
    }
  });
  return list;
}

/**
 * For getFileInfo()
 * @param {String} path
 * @param {var} flag
 * @param {String} fileName
 */
function getFileInfo(path, flag = 0, fileName = "undefined") {
  /*
      flag = 1 --> means return content
      if file name is given then content of that file else return content of all files.
      only path is given( flag=0 )--> give list of all files in directory.
    */
  path = fixPath(path);
  if (flag === 1) {
    // get content from file
    return getListContent(path, fileName);
  }
  // return list of files
  return getList(path);
}

function filesObjects() {
  let arr;
  _.each(_.keys(jsonFiles), key => {
    arr = {
      ...arr,
      [key]: require(jsonFiles[key])
    };
  });
}

module.exports = {
  filesObjects,
  getFileInfo,
  readAllFiles
};
