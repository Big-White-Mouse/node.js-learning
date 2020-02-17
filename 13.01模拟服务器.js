const http = require('http');
const path = require('path');
const url = require('url');

http.createServer((req,res)=>{
	let obj = url.parse(req.url,true);
	res.end(obj.query.username + '======' + obj.query.password);
}).listen(3000,()=>{
	console.log('running...');
})