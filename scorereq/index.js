const http = require('http');
const path = require('path');
const fs = require('fs');
const querystring = require('querystring');
const template = require('art-template');
const scoreData = require('./score.json');

http.createServer((req,res)=>{
	// 查询成绩的入口地址 /query
	if(req.url.startsWith('/query') && req.method === 'GET'){
		let content = template(path.join(__dirname,'view','index.art'),{});
		res.end(content);
	} else if(req.url.startsWith('/score') && req.method === 'POST'){
		let pdata = '';
		req.on('data',(chunk)=>{
			pdata += chunk;
		});
		req.on('end',()=>{
			let obj = querystring.parse(pdata);
			let result = scoreData[obj.code];
			let content = template(path.join(__dirname,'view','result.art'),result);
			res.end(content);
		});
	}else if(req.url.startsWith('/all') && req.method === 'GET'){
		//全部成绩
		let arr = [];
        for(let key in scoreData){
            arr.push(scoreData[key]);
        }
        let content = template(path.join(__dirname,'view','list.art'),{
            list : arr
        });
        res.end(content);
	}
}).listen(3000,()=>{
	console.log('running...');
});