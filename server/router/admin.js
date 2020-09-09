const express = require('express')
const router = express.Router()
const db = require('../db')
const {setRedis,getRedis} = require('../redis')
const jwt = require('jsonwebtoken')
const moment = require('moment');

// 注册
router.post('/api/admin/register', (req, res) => {
  new db.User(req.body).save((err) => {
    if (err) {
      res.status(500).send()
      return
    }
    res.json({
      code: 200,
      msg: '注册成功！'
    })
  })
})

// 登陆
router.post('/api/admin/login', (req, res) => {
  db.User.find({ name: req.body.name, password: req.body.password }, (err, docs) => {
    if (err) {
      res.status(500).send(err)
      return
    }
    if (docs.length > 0) {
      let content = { name: req.body.name },
        secretOrPrivateKey = "hlp",
        token = jwt.sign(content, secretOrPrivateKey, {
          expiresIn: 60 * 60 * 10
        });
        setRedis(token, req.body.name)
        res.json({ code: 200, msg: '登陆成功!', data: { token: token } })
    }
  })
})

// 文章保存
router.post('/api/admin/saveArticle', (req, res) => {
  getRedis(req.headers.token).then(name=>{
    db.User.find({name: name}, (err, docs) => {
      if (err) {
        console.error(err)
        return
      }
      req.body.id = docs[0]._id
      let current_time =  moment(Date.now()).format('YYYY-MM-DD HH:mm')
      req.body.date = current_time
      new db.Article(req.body).save((err) => {
        if (err) {
          res.status(500).send()
          return
        }
        res.json({
          code: 200,
          msg: '保存成功！'
        })
      })
    })
  })
})


module.exports = router