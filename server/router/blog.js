const express = require('express')
const router = express.Router()
const db = require('../db')
const {setRedis,getRedis} = require('../redis')
const jwt = require('jsonwebtoken')

// 获取所有文章
router.post('/api/blog/article', (req, res) => {
  getRedis(req.headers.token).then(name=>{
    db.User.find({name: name}, (err, docs) => {
      if (err) {
        console.error(err)
        return
      }
      let id = docs[0]._id
      db.Article.find({id: id}, (err, docs) => {
        if (err) {
          console.error(err)
          return
        }
        let data = []
        docs.forEach((item)=>{
          data.push({
            title: item.title,
            content: item.content,
            date: item.date
          })
        })
        res.json({ code: 200, data })
      })
    })
  })
})


module.exports = router