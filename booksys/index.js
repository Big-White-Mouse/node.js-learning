//入口文件

const express = require('express');
const path = require('path');
const template = require('art-template');
const bodyParser = require('body-parser');
const app = express();

//启动静态资源服务 将public下的静态资源添加到服务
//访问时要添加/www在开头
app.use('/www',express.static('public'));

//引入配置路由的文件
const router = require('./router.js');

//设置模板引擎
app.set('views',path.join(__dirname,'views'))
.set('view engine','art')
.engine('art',require('express-art-template'));

//处理请求参数
app.use(bodyParser.urlencoded({extended : false}))
.use(bodyParser.json());

//启动服务器
//1.配置路由 将配置单独写在一个文件中
app.use(router);
//2.监听端口
app.listen(3000,()=>{
	console.log('running...');
})