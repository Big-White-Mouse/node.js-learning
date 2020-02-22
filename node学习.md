# node学习

## 基本知识

- JavaScript本质是编程语言 解释执行
- 浏览器的内核包括
  1. DOM渲染引擎
  2. js解释器
- 基于Node.js等第三方工具可以让js脱离浏览器，进而开发桌面应用
- 直接在桌面运行的js代码 的环境被称作REPL(read-eval-print-loop)(读取-执行-打印-循环)

## 安装与配置

https://www.cnblogs.com/hjson/p/10276532.html

## 使用

- node 进入
- .exit脱退出
- '_' 上一次的运算结果

## 运行js文件

- node *.js

## 模块化

### 全局成员(global)

- 路径

  1. __filename  包含文件名
  2. __dirname  不包含文件名

- 定时器

  1. setTimeout
  2. setInterval
  3. setImmediate

- 进程 process

  - process.argv 输出一个数组，默认前两个数据分别是：node.js的环境路径；当前执行的js文件的全路径；从第三个参数表示命令行输入的参数

  - 使用方法：

    - node [文件名.js] [参数]

    - 输出：

      [‘目录’，‘目录’，’参数‘]

- 等等，不过多介绍

### 模块化基本知识

#### 模块化核心

- exports
- module
- require()

#### 模块化开发

- 缺点
  1. 命名冲突
  2. 文件依赖

#### 前端标准的模块化规范

1. AMD - requirejs 国外
2. CMD - seajs 阿里巴巴

#### 服务器端的模块化规范

1. CommonJS - Node.js

#### 模块化相关规则

1. 定义：
   - 一个js文件就是一个模块，模块内部成员相互独立，正常不可相互访问
   - 模块成员的导出和引入  见文件04
2. 已经加载的模块会缓存，再加载相同的内容的时候不会再次加载，节省资源
3. 可以引入的模块文件
   1. .js
   2. .json  (直接引入一个对象)
   3. .node
4. 文件后缀名可以省略，如果有同名文件优先加载.js文件，再加载.json文件，最后加载.node文件

#### 补充ES6语法

1. let

   - var变量会预解析，输出写在var前面 输出undefined，先解析再赋值；let不会预解析，输出写在let前面会报错

   - 在同一个作用域内let声明的变量不允许重复声明
   - var可以在块级作用域(for循环，if判断里，或者是一对大括号中间)外访问到，let不可以

2. const

   - 声明常量，不可重新赋值
   - 声明的常量必须初始化

3. 变量的结构赋值
   ```js
   var [a,b,c] = [1,2,3]
   //不填则是undefined
   
   ```

var [a=1,b,c] = [,2,]
   //给a指定默认值，c不赋值
   ```
   
4. 对象的结构赋值

   ```js
   let {a,b} = {a:'a1',b:'b1'}
   //对象也可以赋默认值
   ```

   ```js
   let {cos,sin,random} = Math;
   //cos,sin,random就是函数了
   ```

5. 字符的结构赋值

   ```js
   let [a,b,c,d,e] = "hello";
   //每个字符变量对应一个字母
   ```

6. 字符串扩展

   1. includes()

      ```js
      console.log('hello world'.includes('world',6));
      //判断字符串中是否包含指定子串(返回T/F)
      //第二个参数是从第几个字符开始判断
      ```

   2. startWith()

      ```js
      'admin/index.php'.startWith('admin');
      //判断字符串是否以指定子串开始(返回T/F)
      ```

   3. endWith()   同理

   4. 模板字符串

      ```js
      let obj = {
      	uname:'zs',
          age:'18',
      }
      let tag = '<span>'+obj.uname+'</span><span>'+obj.age+'</span>';
      //上面是字符串拼接的方式渲染页面
      //下面是模板字符串  用反引号
      let tep = `
      	<span>${obj.uname}</span>
      	<span>${obj.age}</span>
      `;
      //大括号中可以进行一些简单的运算和函数调用
      ```

#### ES6对于函数的扩展

1. 参数默认值

   ```js
   function fun(param){
       let p = param || 'hello';
       console.log(p);
   }
   //之前用来给参数赋默认值的方法
   //ES6中给参数赋默认值的方法
   function fun(param = 'hello'){
       console.log(param);
   }
   ```

2. 参数结构赋值

   ```js
   function fun({uname,age}={}){//默认空对象
       console.log(uname,age);//输出两个undefined
   }
   fun()
   ```

3. rest参数(剩余参数)

   ```js
   function fun(a,...p){
       console.log(a,p);
   }
   fun(1,2,3);//打印出1 [2,3]
   //就是多余的参数存在一个数组里
   ```

4. 扩展运算符 ...

   ```js
   function fun(a,b,c,d){
       console.log(a+b+c+d);
   }
   let arr=[1,2,3,4];
   fun(...arr);
   //将数组展开
   ```

   ```js
   let arr1 = [1,2,3];
   let arr2 = [4,5,6];
   let arr3 = [...arr1,...arr2];//合并数组
   console.log(arr3);
   ```

5. 箭头函数(=>)

   ```js
   let fun = () => console.log('hello');
   //等效于
   function fun(){
   	console.log('hello');
   }
   ```

   ```js
   let fun = v => v;//一个参数
   //等效于
   function fun(v){
       return v;
   }
   ```

   ```js
   let fun = (a,b) => {let c=3;console.log(a + b + c);}
   //多个参数用小括号,函数体包含多个语句用花括号
   fun(1,2);
   ```

   - 注意
   - 箭头函数this取决于定于，而不是调用
   - 箭头函数不是构造函数，不能new
   - 箭头函数不能使用arguments获取参数列表，可以使用rest参数代替

6. 类和静态方法

   ```js
   //之前的构造类的方法
   function A(name){
       this.name = name;
   }
   A.prototype.showName = function(){
       console.log(this.name);
   }
   let a = new A('Tom');
   a.showName();
   let a1 = new A('Jerry');
   a1.showName();
   ```

   ```js
   //ES6 引入了class关键字
   class A{
       //构造函数
       constructor(name){
           this.name = name;
       }
       showName(){
           console.log(this.name);
       }
       //静态方法(只能通过类名调用，不能使用实例对象调用)
       static showInfo(){
           console.log('hello');
       }
   }
   let a = new A('doge')
   a.showName();
   A.showInfo();
   ```

7. 类的继承 extends

   ```js
   class B extends A{//B继承了A
       constructor(name,color){
   		super(name);//调用父类？？
           this.color = color;
       }
       showColor(){
           console.log(this.color);
       }
   }
   let b = new B('d1','blue');
   b.showName();
   b.showColor();
   Dog.showInfo();
   ```

## node基本操作

### 基本特征

- nodejs中的异步操作
  1. 文件处理
  2. 网络操作
- 浏览器中的异步操作
  1. 定时任务
  2. 事件处理
  3. Ajax回调处理
- js通过引入事件队列的方式对单线程进行优化
- js是基于回调函数的编码风格
- 异步编程依托于回调来实现，但不能说使用了回调后程序就异步化了。
- 回调函数在完成任务后就会被调用，Node 使用了大量的回调函数，Node 所有 API 都支持回调函数。
- 例如，我们可以一边读取文件，一边执行其他命令，在文件读取完成后，我们将文件内容作为回调函数的参数返回。这样在执行代码时就没有阻塞或等待文件 I/O 操作。这就大大提高了 Node.js 的性能，可以处理大量的并发请求。
- 回调函数一般作为函数的最后一个参数出现：

### 路径操作

````js
const path = require('path');//引入模块
````

1. path.basename(path[,ext])  返回 path 的最后一部分

   ```js
   path.basename('/foo/baz/asdf/quux.html');
   // 返回: 'quux.html'
   path.basename('/foo/baz/asdf/quux.html', '.html');
   // 返回: 'quux'
   ```

2. path.dirname(path) 返回path 的目录名

   ```js
   path.dirname('/foo/bar/baz/asdf/quux');
   // 返回: '/foo/bar/baz/asdf'
   ```

3. path.extname(path) 返回path的扩展名,从最后一次出现 .字符到path最后一部分的字符串结束。

   ```js
   path.extname('index.coffee.md');
   // 返回: '.md'
   path.extname('index.');
   // 返回: '.'
   path.extname('index');
   // 返回: ''
   ```

4. path.join([...paths])使用平台特定的分隔符作为定界符将所有给定的 `path` 片段连接在一起，然后规范化生成的路径。

   ```js
   path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
   // 返回: '/foo/bar/baz/asdf'
   path.join('foo', {}, 'bar');
   // 抛出 'TypeError: Path must be a string. Received {}'
   ```

5. 其他方法

   - <http://nodejs.cn/api/path.html#path_path_join_paths>

### 文件操作

- <http://nodejs.cn/api/fs.html>

```js
const fs = require('fs');//引用模块
```

- 同步与异步的区别详见文件09

#### 文件的读写

```js
//写
const fs = require('fs');//引入fs模块
// 写文件操作 如果没有创建demo.txt系统会在执行命令时自动创建demo.txt文件
fs.writeFile('./demo.txt', '这里存放要写入的内容', err => {
    if(err != null){
        console.log(err);   // 打印错误信息
        return; // 阻止程序继续向下执行
    }
    console.log('文件内容写入成功');
})
//读
// 2-通过模块内部的readFile读取文件内容
fs.readFile('./demo.txt', 'utf8', (err, doc) => {
    /*
        err : 如果文件读取出错err是一个对象，包含错误信息
              如果文件读取正确，那么err是null
        doc : 读取文件的结果
    */
    console.log('文件读取结果：' + doc);
    console.log('错误信息： ' + err);
});
```

#### 大文件操作(文件的流式操作)

- write/read file会把文件内容都读取到内存中，资源消耗极大，所以引入文件的流式操作    
- 流式操作，加载一块，执行一块   

```js
fs.createReadStream(path[,options])
fs.createWriteStream(path[,options])
```

```js
readStream.pipe(writeStream);
//pipe直接把输入和输出流结合起来
```



- 详见文件08

### Buffer操作

- Buffer本质是字节数组，其中包括3种方法
  - 构造方法(类)
  - 静态方法
  - 实例方法

- Buffer对象是Node处理二进制数据的一个接口。它是Node原生提供的全局对象，可以直接使用，不需要require(‘buffer’)。
- 实例化
  - Buffer.from(array)
  
  - Buffer.from(string)
  
  - Buffer.alloc(size)
  
    ```js
    let buf = new Buffer(5);
    //上面通过new的方式实例化已经废弃
    let buf = Buffer.alloc(5);
    console.log(buf);
    ```

- 静态方法(功能方法)
  - Buffer.isEncoding(['编码名称']) 判断是否支持该编码
  - Buffer.isBuffer([对象]) 判断是否为Buffer
  - Buffer.byteLength([对象]) 返回指定编码的字节长度，默认utf8
  - Buffer.concat([由buffer对象组成的数组]) 将一组Buffer对象合并为一个Buffer对象
- 实例方法
- write() 向buffer对象中写入内容
- slice() 截取新的buffer对象
- toString() 把buf对象转成字符串
- toJson() 把buf对象转成json形式的字符串

## 包管理工具的使用

- 多个模块可以形成包，不过要满足特定的规则才能形成规范的包

### NPM简介

- (包管理工具 node.js package management)
- 全球最大的模块生态系统，nodejs的包管理工具

### 安装方式

- 本地安装(一般用于安装开发环境)
- 全局安装(一般是安装命令行的工具)

### npm常用命令

1. 安装
   - npm install [-g] ‘包名称[@'版本号']’
2. 卸载
   - npm uninstall [-g] '包名称'
3. 更新
   - npm update [-g] '包名'
   - 更新到最新版本
4. 制作包
   - cd到想要打包成包的文件夹内  npm init
   - npm init -y(所有属性均默认)
   - 根目录名称不能由中文
5. 包的执行
   - node [文件夹名]

### yarm

- facebook用来解决npm一些问题自己制作的工具
- 使用方式基本相同
  - yarm (global) add [] === npm install (-g) []
  - yarm remove [] === npm uninstall []
  - yarm upgrade [] === npm update []
  - yarm init === npm init 

### 自定义包

1. 包的规范
   1. package.json必须在包的顶层目录下
   2. 二进制文件应该在bin目录下
   3. JS代码应该在lib目录下
   4. 文档应该在doc目录下
   5. 单元测试在test目录下
2. package.json字段分析
   1. name：包的名称，必须是唯一的，由小写英文字母、数字和下划线组成，不能包含空格
   2. description：包的简要说明
   3. version：符合语义化版本识别规范的版本字符串
   4. keywords：关键字数组，通常用于搜索
   5. maintainers：维护者数组，每个元素要包含name、email（可选）、web（可选）字段
   6. contributors：贡献者数组，格式与maintainers相同。包的作者应该是贡献者数组的第一- 个元素
   7. bugs：提交bug的地址，可以是网站或者电子邮件地址
   8. licenses：许可证数组，每个元素要包含type（许可证名称）和url（链接到许可证文本的- 地址）字段
   9. repositories：仓库托管地址数组，每个元素要包含type（仓库类型，如git）、url（仓- 库的地址）和path（相对于仓库的路径，可选）字段
   10. dependencies：生产环境包的依赖，一个关联数组，由包的名称和版本号组成
   11. devDependencies：开发环境包的依赖，一个关联数组，由包的名称和版本号组成

## node实现服务器配置

### 静态网站

- 简单的案例 见 文件10
  - 路径的分发
- 文件的分发 见 文件11

- 静态服务器 见 文件12

### 动态网站

- 参数传递与获取
- get参数处理
  - url.parse 将url字符串转换成对象
  - 见文件13
- post参数处理

## 事件队列以及事件监听器和事件触发

### EventEmitter

- 见 <https://www.runoob.com/nodejs/nodejs-event.html>

## 模板引擎的使用

- 见scorereq/

## Express

### nodejs中web开发的相关内容

1. Node.js不需要依赖第三方应用软件，可以基于自己的api实现服务器的搭建
2. 实现静态资源服务
3. 路由处理
4. 动态网站
5. 模板引擎
6. get和post参数处理

### Web开发框架: express

- express将上述api进行整合，形成了一套新的api
- 支持链式编程

#### 服务器

- 见文件myexpress/app.js

#### 路由处理

- 见文件myexpress/15.02

#### 中间件

- 应用级中间件
  - .use
- 路由级中间件
  - .get.post.put.delete
- 错误处理级中间件
- 内置中间件
- 第三方中间件

#### express与模板引擎的结合

- 见文件

## 数据库

- 以后再看