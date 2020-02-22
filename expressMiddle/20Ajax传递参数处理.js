const express = require('express');
const app = express();
const bodyParser = require('body-Parser');

//挂载内置中间件
app.use(express.static('pub'));

//挂载参数处理中间件(post)
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());//处理json格式的参数

//处理get提交的参数
app.get('/login',(req,res)=>{
	let data = req.query;
	console.log(data);
	res.send('get data');
});


//处理post
app.post('/login',(req,res)=>{
	let data = req.body;
	// console.log(data);
	if(data.username === 'admin' && data.password === '123'){
		res.send('post success');
	} else {
		res.send('post failure');
	}
}).listen(3000,()=>{
	console.log('running...');
});