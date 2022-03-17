"use strict";

const { runtime } = nodex;
const { data } = runtime;

exports.init = async function (args) {
  console.log("logic init.");
  console.log("logic init args:", args);

};

exports.helloWorld = async function () {
  return "hello world!";
};

exports.nameGenerator = async function ({ subject }) {
  let subjectNameLibs = await data.getSubjectNameLibs(subject) || {};
  let { firstNameList = [], lastNameList = [] } = subjectNameLibs;
  let name = getRandomName(firstNameList, lastNameList) || null;
  return name;
};

// 获取指定范围内的随机数 [min, max)
function randomAccess(min, max) {
  return Math.floor(Math.random() * (min - max) + max);
}

/**
 * 在数组里面选择元素，并拼接成字符串
 * @param {Array} firstNameList 姓数组
 * @param {Array} lastNameList 名数组
 * @returns 姓名
 */
function getRandomName(firstNameList, lastNameList) {
  let name = firstNameList[randomAccess(0, firstNameList.length)];

  if(lastNameList.length > 0){
    name = name + lastNameList[randomAccess(0, lastNameList.length)];
  }
  return name;
}

