/* 
  创建一台 http 服务器，根据用户的 url get 来请求不同的数据
*/
const http = require('http');
const fs = require('fs');
const A = require('./module/a');

const server = http.createServer();

server.on('request', (req, res) => {
  console.log(req.socket.remoteAddress);
  console.log(req.socket.remotePort);
  console.log(A.testBC());
  // res.setHeader("Content-type","text/plain;charset=utf-8");
  // res.end("测试");

  let url = req.url;
  if (url === '/a') {
    res.setHeader('Content-type', 'text/plain;charset=utf-8');
    res.end("文本测试")
  } else if (url === '/img1') {
    fs.readFile('./img/a.jpg', (err, data) => {
      if (err) {
        res.setHeader('Content-type', 'text/plain;charset=utf-8');
        res.end('图片加载失败，请稍后重试')
      } else {
        res.setHeader('Content-type", "image/jpeg');
        res.end(data);
      }
    })
  } else if (url === '/html') {
    fs.readFile('./module/index.html', (err, data) => {
      if (err) {
        res.setHeader('Content-type", "text/plain;charset=utf-8');
        res.end('html加载失败')
      } else {
        res.setHeader('Content-type", "text/html;charset=utf-8');
        res.end(data);
      }
    })
  }
});

server.listen(3000, () => {
  console.log('server is running...   http://127.0.0.1:3000');
})