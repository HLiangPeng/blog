// redis-server cmd启动
let redis = require('redis'),
  dbConfig = require('./config'),
  RDS_PORT = dbConfig.port,     //端口号
  RDS_HOST = dbConfig.host,     //服务器IP
  RDS_PWD = dbConfig.pass,      //密码
  // RDS_OPTS = {auth_pass: RDS_PWD},
  RDS_OPTS = {}
client = redis.createClient(RDS_PORT, RDS_HOST, RDS_OPTS);


client.on('ready', function (res) {
  console.log('redis链接成功！');
});
client.on('end', function (err) {
  console.log('end');
});
client.on('error', function (err) {
  console.log('===');
  console.log(err);
});

client.on('connect', function () {
  console.log('redis connect success!');
});


// 设置 redis
function setRedis(key, val) {
  if (typeof val === "object") {
    val = JSON.stringify(val)
  }
  client.set(key, val,(err,res)=>{
    // console.log(res)
  })
}

// 获取
function getRedis(key) {
  return new Promise((resolve, reject) => {
    client.get(key, (err, val) => {
      if (err) {
        reject(err)
        return
      }
      if (val === null) {
        resolve(null)
        return;
      }
      try {
        resolve(
          JSON.parse(val)
        )
      } catch (e) {
        resolve(val)
      }
    })
  })
}

module.exports = {
  setRedis,
  getRedis, 
}