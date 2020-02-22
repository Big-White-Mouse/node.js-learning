//业务模块

const data = require('./data.json');
const path = require('path');
const fs = require('fs');

//自动生成图书编号
let maxBookCode = ()=>{
	let arr = [];
	data.forEach((item)=>{
		arr.push(item.id);
	});
	return Math.max.apply(null,arr);
}

//渲染主页面 并导出方法
exports.showIndex = (req,res)=>{
	res.render('index',{list : data});
}
//跳转到添加图书页面
exports.toAddBook = (req,res)=>{
	res.render('addBook',{});
}
//添加图书 保存数据
exports.addBook = (req,res)=>{
	//获取表单数据
	let info = req.body;
	let book = {};
	for(let key in info){
		book[key] = info[key];
	}
	book.id = maxBookCode() + 1;
	data.push(book);
	//把内存中的数据写入文件
	fs.writeFile(path.join(__dirname,'data.json'),JSON.stringify(data),(err)=>{
		if(err){
			res.send('server error');
		} else {
			//文件写入成功后跳转到主页面
			res.redirect('/');
		}
	})
}

//跳转编辑图书页面
exports.toEditBook = (req,res)=>{
	let id = req.query.id;//拿到要编辑的图书的id
	let book = null;
	data.forEach((item)=>{
		if(id === item.id){
			//在数据库里找到对应id的信息，赋值给book对象，然后跳出循环
			book = item;
			return;
		}
	});
	res.render('editBook',book);
}

//编辑图书更新数据
exports.editBook = (req,res)=>{
	//得到表单数据
	let info = req.body;
	data.forEach((item)=>{
		//在数据库中找到同id的数据
		if(info.id === item.id){
			for(let key in info){
				//替换数据
				item[key] = info[key];
			}
			return;
		}
	});
	//把内存中的数据写入文件
	fs.writeFile(path.join(__dirname,'data.json'),JSON.stringify(data),(err)=>{
		if(err){
			res.send('server error');
		} else {
			//文件写入成功后跳转到主页面
			res.redirect('/');
		}
	})
}