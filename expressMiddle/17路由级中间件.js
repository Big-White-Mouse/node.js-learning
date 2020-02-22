const express = require('express');
const app = express();

app.get('/abc',(req,res,next)=>{
	console.log(1);
	next('route');//添加参数route就会跳转到下一个路由
},(req,res)=>{
	console.log(2);
	res.send('hello');
}).get('/abc',(req,res)=>{
	console.log(3);
	res.send('world');
}).listen(3000,()=>{
	console.log('runnning...');
});

