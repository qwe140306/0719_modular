/*
* 主文件，用于汇总各个模块
* */

//在es6的模块化规范中，用哪一种方式引入，取决于用何种方式暴露的。

//引入module1，module1是【分别暴露】的
import {data,demo1,test1} from './module1'
//引入module2,module2是【统一暴露】的
import {demo2,test2} from './module2'
//引入module3,module3是默认暴露的
import module3 from './module3'
//引入第三方模块uniq，几乎所有的第三方模块，都用默认暴露的方式。
import uniq from 'uniq'

console.log(data)
demo1()
test1()
demo2()
test2()
console.log(module3.name)
console.log(module3.age)
module3.speak()
console.log(uniq([1, 3, 3, 3, 2, 5, 4, 6, 7, 9, 8, 11, 10]));
