let root = 'C:\\Users\\12507\\Desktop';
let fileContent = `
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
	</head>
	<body>
		<div>hello world</div>
	</body>
	</html>
`
//引入核心模块
const path = require('path');
const fs = require('fs');
//初始化数据
let initData = {
	projectName : 'test',
	data : [{
		name : 'img',
		type : 'dir'
	},{
		name : 'css',
		type : 'dir'
	},{
		name : 'js',
		type : 'dir'
	},{
		name : 'index.html',
		type : 'file'
	}]
}
//创建根路径
fs.mkdir(path.join(root,initData.projectName),(err)=>{
	//如果有报错，结束程序
	if(err) return;
	//没报错，创建子目录和文件
	initData.data.forEach((item)=>{
		if(item.type === 'dir'){
			fs.mkdirSync(path.join(root,initData.projectName,item.name));
		} else if(item.type === 'file'){
			fs.writeFileSync(path.join(root,initData.projectName,item.name),
				fileContent);
		}
	})	
})