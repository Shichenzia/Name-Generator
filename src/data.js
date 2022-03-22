"use strict";

const path = require("path");

var nameLibsStore = {};

exports.init = async function (args) {
  console.log("data init.");
  console.log("data init args:", args);

  for (const index in args.files) {
    const fileName = path.join(process.cwd(), `data/name-libs/${args.files[index]}`);
    const nameLibObj = requireLogic(fileName, args.files[index]);

    nameLibsStore = {
      ...nameLibsStore,
      ...nameLibObj
    }
  }
};

/**
 * 读取json文件，并解析数据
 * @param {String} fileName 请求路径
 * @param {String} file 文件名
 * @returns 该主题的姓名库对象
 */
function requireLogic(fileName, file) {
  const nameSubjiectList = require(fileName);
  const subject = file.split('.')[0];

  let nameLibObj = {};
  nameLibObj[subject] = nameSubjiectList;

  return nameLibObj;
}

/**
 * 获取主题的姓名库
 * @param {String} subject 主题名
 * @returns 该主题对应的姓名库
 */
exports.getSubjectNameLibs = async function(subject){
  let subjectNameLibs = nameLibsStore[subject];
  return subjectNameLibs;
};
