'use strict';

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

var _uniq = require('uniq');

var _uniq2 = _interopRequireDefault(_uniq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//引入module3,module3是默认暴露的
/*
* 主文件，用于汇总各个模块
* */

//在es6的模块化规范中，用哪一种方式引入，取决于用何种方式暴露的。

//引入module1，module1是【分别暴露】的
console.log(_module.data);
//引入第三方模块uniq，几乎所有的第三方模块，都用默认暴露的方式。

//引入module2,module2是【统一暴露】的

(0, _module.demo1)();
(0, _module.test1)();
(0, _module2.demo2)();
(0, _module2.test2)();
console.log(_module4.default.name);
console.log(_module4.default.age);
_module4.default.speak();
console.log((0, _uniq2.default)([1, 3, 3, 3, 2, 5, 4, 6, 7, 9, 8, 11, 10]));