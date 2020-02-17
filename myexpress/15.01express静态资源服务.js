const express = require('express');
const app = express();

//static里的参数就是静态资源的根路径
// let server = app.use(express.static('rootpath'));

//虚拟目录功能，.use里第一个参数
//再访问静态资源的时候要在前面加上虚拟目录
//eg. localhost:3000/abc/hello.html
let server = app.use('/abc',express.static('rootpath'));
// app.use(express.static('hello')); 可以指定多个目录


//也可以直接用app.listen监听端口
server.listen(3000,()=>{
	console.log('running...');
});