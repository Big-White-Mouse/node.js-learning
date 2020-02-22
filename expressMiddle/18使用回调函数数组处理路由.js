const express = require('express');
const app = express();

let f1 = function(req,res,next){
	console.log('f1');
	next();
}
let f2 = function(req,res,next){
	console.log('f2');
	next();
}
let f3 = function(req,res){
	res.send('hello from f3');
}
app.get('/abc',[f1,f2,f3]).listen(3000,()=>{
	console.log('running...');
});
//也可以混合使用
/*
app.get('/abc',[f1,f2],()=>{
	........
})
*/