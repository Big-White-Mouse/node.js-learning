//静态服务器

const http = require ('http');
// //创建服务器对象
// let server = http.createServer();
// //绑定请求时间
// server.on('request',(req,res)=>{
// 	res.end('hello');
// });
// //监听端口
// server.listen(3000);

//简化方法
http.createServer((req,res)=>{
	res.end('hello');
}).listen(3000,'192.168.8.153',()=>{
	console.log('running...');
})//这个不能通过localhost访问，要通过IP地址访问