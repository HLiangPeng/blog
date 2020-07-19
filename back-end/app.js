const createError = require('http-errors');
const express = require('express');
// const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// const mongoose = require('mongoose')
const fs = require('fs');

const usersRouter = require('./routes/users');
const blogRouter = require('./routes/blog')

const app = express();

// mongoose.connect('mongodb://localhost/blog')

// var db = mongoose.connection;

// // 连接数据库
// db.on('open', ()=>{
//     console.log('MongoDB连接成功');
//     let BlogSchema = mongoose.Schema({
//       name: String,
//       content: String
//     })
//     let Blog = mongoose.model('Blog',BlogSchema)
//     // let blog_1 = new Blog({
//     //   name: '博客一',
//     //   content: '内容一'
//     // })
//     // blog_1.save((err,res)=>{
//     //   if(err){
//     //     return console.error(err)
//     //   }
//     //   console.log(res)
//     // })
//     Blog.find(function (err, kittens) {
//       if (err) return console.error(err);
//       // console.log(kittens);
//     })
// });
// db.on('error', ()=>{
//     console.log('MongoDB连接失败');
// });



// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));


app.use('/users', usersRouter);
app.use('/blog',blogRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/**
 * 全局方法
 * 接口模块
 */
const fileName = ['plugins', 'models'];
const global = fs.readdirSync(__dirname).filter(i => fileName.includes(i)).reduce((total, item) => {
    const files = fs.readdirSync(__dirname + '/' + item)
    console.log(files)
    files.map(i => {
        let name = i.replace('.js', '')
        let nameKey = i.replace('.js', '')
        if(item == 'models'){
            nameKey = name.replace(/^\S/, s => s.toUpperCase())
        }
        total[item][nameKey] = require(  __dirname + '/' + item + '/' +  name)
    })
    return total
}, {'plugins': {}, 'models': {}})

// 加载所有路由
const dirname = __dirname + '/routes'
fs.readdirSync(dirname).forEach((i) => {
    const file = dirname + '/' + i;
    if(fs.statSync(file).isDirectory()){
        fs.readdirSync(file).forEach(item => {
            const name = item.replace('.js', '');
            require( file + '/' + name )(app, global['plugins'], global['models'])
        })
    }
})


require('./plugins/db')(app)

module.exports = app;
