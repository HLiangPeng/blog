var createError = require('http-errors');
var express = require('express');
// var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')

const usersRouter = require('./routes/users');
const blogRouter = require('./routes/blog')

var app = express();

mongoose.connect('mongodb://localhost/blog')

var db = mongoose.connection;

// 连接数据库
db.on('open', ()=>{
    console.log('MongoDB连接成功');
    let BlogSchema = mongoose.Schema({
      name: String,
      content: String
    })
    let Blog = mongoose.model('Blog',BlogSchema)
    // let blog_1 = new Blog({
    //   name: '博客一',
    //   content: '内容一'
    // })
    // blog_1.save((err,res)=>{
    //   if(err){
    //     return console.error(err)
    //   }
    //   console.log(res)
    // })
    Blog.find(function (err, kittens) {
      if (err) return console.error(err);
      console.log(kittens);
    })
});
db.on('error', ()=>{
    console.log('MongoDB连接失败');
});



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

module.exports = app;
