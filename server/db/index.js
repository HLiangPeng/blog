const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/blog', (err) => {
  if (err) {
    console.log("连接失败");
    return
  }
  console.log('数据库链接成功！')
})

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  date: String
},{versionKey: false})

const articleSchema = new mongoose.Schema({
  id: String,
  title: String,
  content: String,
  date: String
},{versionKey: false})

const Models = {
  User: mongoose.model('User', userSchema),
  Article: mongoose.model('Article', articleSchema)
}

module.exports = Models
