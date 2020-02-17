/*
由服务器动态生成的内容叫动态资源
动态资源的路径的处理叫做路由

也解释为根据请求路径和请求方式进行路径分发处理
http常用请求方式
post(添加)/get(查询)/put(更新)/delete(删除)

restful api满足特定格式的url地址
*/


const express = require('express');
const app = express();

//基本的路由处理
// app.get('/',(req,res)=>{
// 	res.send('get data');
// })
// app.post('/',(req,res)=>{
// 	res.send('post data');
// })
// app.put('/',(req,res)=>{
// 	res.send('put data');
// })
// app.delete('/',(req,res)=>{
// 	res.send('delete data');
// })
// app.listen(3000,()=>{
// 	console.log('running...');
// })

//使用use分发可以直接处理所有的路由请求
app.use((req,res)=>{
	res.send('ok');
})