var module = require('./04.1mod.js');

//第一种引入模块的方法
//var ret = module.sum(1,2);

//第二种引入的方法.导入的module其实就是sum方法
var ret = module(1,2);

console.log(ret);
//直接输出会报错，因为访问不到module里面的成员
//要在04.1中导出模块成员

