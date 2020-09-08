const express = require('express')
const router = express.Router()
const db = require('../db')
// const check = require('./check')
// const checkLogin = check.checkLogin
// const checkNotLogin = check.checkNotLogin

// 获取所有文章
router.get('/api/home', function (req, res) {
  db.Article.find({}, function (err, docs) {
    if (err) {
      console.error(err)
      return
    }
    res.json({
      code: '200',
      data: docs
    })
  })
})


// 文章保存
router.post('/api/admin/saveArticle', function (req, res) {
  new db.Article(req.body).save((err)=>{
    if (err) {
      res.status(500).send()
      return
    }
    res.json({
      code: '200',
      data: req.body
    })
  })
})


module.exports = router