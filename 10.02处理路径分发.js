/*
	1. req对象是class: http.IncomingMessage的实例对象
	2. res对象是Class: http.ServerResponse的实例对象
*/

// const http = require ('http');
// http.createServer((req,res)=>{
// 	res.end(req.url);
//  //req.url可以获取URL中的路径(端口之后的部分)
// }).listen(3000,'192.168.8.153',()=>{
// 	console.log('running...');
// })

const http = require ('http');
http.createServer((req,res)=>{
	if(req.url.startsWith('/index')){
		//write向客户端响应内容，可以写多次
		res.write('hello');
		res.write('world');
		//终止响应，只能写一次
		res.end('index');
	} else if(req.url.startsWith('/about')){
		res.end('about');
	} else {
		res.end('no content');
	}
}).listen(3000,'192.168.8.153',()=>{
	console.log('running...');
})