'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
* module2，使用的是【统一暴露】
* */

//arr是私有数据，不去暴露
var arr = [1, 3, 5, 7, 9];

function demo2() {
  console.log('我是module2里的demo2函数', arr);
}

function test2() {
  console.log('我是module2里的test2函数', arr);
}

//统一暴露
exports.demo2 = demo2;
exports.test2 = test2;