/*
* module2，使用的是统一暴露
* */

//arr是私有数据，不去暴露
let arr = [1,3,5,7,9]

function demo2() {
  console.log('我是module2里的demo2函数',arr)
}

function test2() {
  console.log('我是module2里的test2函数',arr)
}

//统一暴露
export {demo2,test2}