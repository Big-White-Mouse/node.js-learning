const http = require('http');
const ss = require('./12.02静态服务的封装.js');
const path = require('path');

http.createServer((req,res)=>{
    ss.staticServer(req,res,path.join(__dirname,'hello'));
}).listen(3000,()=>{
    console.log('running....');
})