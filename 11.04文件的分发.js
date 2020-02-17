/*
	响应完整的页面信息
*/
const http = require('http');
const path = require('path');
const fs = require('fs');

//根据路径读取文件的内容
let readFile = (url,res) => {
	fs.readFile(path.join(__dirname,url),'utf-8',(err,fileContent)=>{
		if(err){
			res.end('server error');
		} else {
			res.end(fileContent);
		}
	})
}

http.createServer((req,res)=>{
	if(req.url.startsWith('/index')){
		readFile('11.01index.html',res);
	} else if(req.url.startsWith('/about')){
		readFile('11.02about.html',res);
	} else if(req.url.startsWith('/list')){
		readFile('11.03list.html',res);
	} else {
		//设置响应头 解决汉字乱码问题
		res.writeHead(200,{
			'Content-Type':'text/plain; charset=utf-8'
		})
		res.end('no content 姜');
	}
}).listen(3000,'192.168.8.153',()=>{
	console.log('running...');
})