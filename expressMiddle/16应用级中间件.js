const express = require('express');
const app = express();
let total = 0;

//所有的方法共用相同的res，req对象

app.use((req,res,next)=>{
	console.log('有人访问');
	next()
})
app.use('/user',(req,res,next)=>{
	//记录访问时间
	console.log(Date.now());
	//通过next向下传递函数
	//next方法作用是把请求传递到下一个中间件
	//中间件本质是一个函数，一个可以在任何时候访问req，res两个对象
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