const http = require('http');
const url = require('url');
const ss = require('./12.02静态服务的封装.js');
const querystring = require('querystring');

http.createServer((req,res)=>{
	//启动静态资源服务(用于加载网页)
	if(req.url.startsWith('/14.02login')){
		ss.staticServer(req,res,__dirname);
	}
	//动态资源
	if(req.url.startsWith('/login')){//对应form表单中的action
		//get请求
		if(req.method === 'GET'){
			let param = url.parse(req.url,true).query;
			if(param.username === 'admin' && param.password === '123456'){
				res.end('get成功');
			} else {
				res.end('get失败');
			}
		}
		//post请求
		if(req.method === 'POST'){
			//post数据处理
			let pdata = '';//用来存储post来的数据
			req.on('data',(chunk)=>{
				pdata += chunk;
			});
			req.on('end',()=>{
				let obj = querystring.parse(pdata);
				if(obj.username === 'admin' && obj.password === '123456'){
					res.end('post成功');//模拟查询数据库
				} else {
					res.end('post失败');
				}
			});
		}
	}
}).listen(3000,()=>{
	console.log('running...');
})