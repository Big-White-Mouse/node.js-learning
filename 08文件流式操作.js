const path = require('path');
const fs = require('fs');

let readStream = fs.createReadStream(path.join(__dirname,'06Buffer.js'));
let writeStream = fs.createWriteStream(path.join(__dirname,'../','06.js'));

//基于事件的处理方式
let n = 1;
readStream.on('data',(chunk)=>{
	n++;
	writeStream.write(chunk);
});
readStream.on('end',()=>{
	console.log('done!');
	console.log('执行了'+n+'次');
});