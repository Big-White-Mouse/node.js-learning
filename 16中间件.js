const express = require('express');
const app = express();
let total = 0;

app.use('/user',(req,res,next)=>{
	//记录访问时间
	// console.log(Date.now());
	//通过next向下传递函数
	next()
});
app.use('/user',(req,res,next)=>{
	//记录访问日志
	console.log('访问了/user');
	next()
});
app.use('/user',(req,res)=>{
	total++;
	console.log(total);
	res.send('result');
});
app.listen(3000,()=>{
	console.log('running...');
});