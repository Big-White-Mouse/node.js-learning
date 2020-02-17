const fs = require('fs');
//异步操作
console.log(1);
fs.stat('./06Buffer.js',(err,stat) => {
	//一般回调函数的第一个参数是错误对象，如果err为null或undefined
	//表示没有错误
	if(err) return;
	//如果出错则终止回调函数
	console.log(2);
});
console.log(3);
//输出为1 3 2
//因为编译到回调函数时，因为是异步操作所以会点函数被加入到
//事件队列中主程序继续向下执行，当主程序执行完毕后，
//任务队列中的会点函数被放到主程序中继续执行


//同步操作
console.log(1);
let ret = fs.statSync('./06Buffer.js');
console.log(ret);
console.log(2);
//同步操作只能一步一步执行