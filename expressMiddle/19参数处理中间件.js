const express = require('express');
const app = express();
const bodyParser = require('body-Parser');

//挂载内置中间件
app.use(express.static('pub'));

//挂载参数处理中间件(post)
app.use(bodyParser.urlencoded({extended: false}));

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
		res.send('success');
	} else {
		res.send('failure');
	}
}).listen(3000,()=>{
	console.log('running...');
});