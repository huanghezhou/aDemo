# 通过 nodeJS 实现一个Apache HTTP 服务器
+ Apache服务器的特点是，通过localhost:8080可以访问www文件夹，下面的文件夹里面的index.html文件
+ 实现思路：
- 创建一台8080端口服务器
- 当默认localhost时候，访问www文件下的index文件
- 当url携带  /文件夹名称时，访问文件夹下面的index.html文件，或者手动输入文件名称，访问这个指定的html文件，为了安全，过滤对js和css的直接访问
```javascript
  $ node Apache.js // 运行项目
  console.log(req.socket.remoteAddress)// 主机ip
  console.log(req.socket.remotePort)// 主机port
```