const http = require('http')
const fs = require('fs')
// 1、创建server
const server = http.createServer()

// 2、给server绑定 request 事件，并添加处理函数
server.on('request', (req, res)=>{
  console.log(req.socket.remoteAddress)
  console.log(req.socket.remotePort)
  console.log(req.url)
  res.end('Hello Apache')
})

// 3、监听 8080端口
server.listen(8080,()=>{
  console.log('Server is running...')
})