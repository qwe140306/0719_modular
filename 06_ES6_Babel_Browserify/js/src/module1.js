/*
* module1使用了分别暴露的方式
* */
export let data = 'atguigu'

export function demo1() {
  console.log('我是module1里的demo函数',data.toUpperCase())
}

export function test1() {
  console.log('我是module1里的test函数',data.toLowerCase())
}