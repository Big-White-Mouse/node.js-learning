const express = require('express');
const path = require('path');
const template = require('art-template');
const app = express();

//设置模板的路径
//views 和 view engine 是固定的写法
app.set('views',path.join(__dirname,'views'));
//设置模板引擎
//'art' 与模板的后缀相对应
app.set('view engine','art');

//使express兼容art-template模板引擎
app.engine('art',require('express-art-template'));

app.get('/list',(req,res)=>{
	let data = {
		title : '水果',
		list : ['apple','orange','banana']
	}
	//render是经过express封装的art-template api
	//第一个参数是名称，后缀和路径上面配置过
	//第二个参数是渲染模板的数据
	res.render('list',data);
}).listen(3000,()=>{
	console.log('running...');
});