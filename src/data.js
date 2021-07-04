"use strict";

const path = require("path");

var nameLibsStore = {};

exports.init = async function (args) {
  console.log("data init.");
  console.log("data init args:", args);

  for (const index in args.file) {
    const fileName = path.join(process.cwd(), `data/name-libs/${args.file[index]}`);
    const nameLibObj = requireLogic(fileName, args.file[index]);
    
    nameLibsStore = {
      ...nameLibsStore,
      ...nameLibObj
    }
  }
};

function requireLogic(fileName, file) {
  const nameSubjiectList = require(fileName);
  const subject = file.split('.')[0];

  let nameLibObj = {};
  nameLibObj[subject] = nameSubjiectList;

  return nameLibObj;
}

exports.getSubjectNameLibs = async function(subject){
  let subjectNameLibs = nameLibsStore[subject];
  return subjectNameLibs;
};
