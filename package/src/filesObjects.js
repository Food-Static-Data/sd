import jsonFiles from "./files";
import _ from "lodash";

// @TODO use lodash for it
let arr;
_.keys(jsonFiles).forEach(key => {
  arr = {
    ...arr,
    [key]: require(jsonFiles[key])
  };
});

module.exports = arr;
