var sum = function(a,b){
	return parseInt(a) + parseInt(b);
}


//导出模块成员

//第一种导出模块的方法
//exports.sum = sum;

//第二种方法
module.exports = sum;