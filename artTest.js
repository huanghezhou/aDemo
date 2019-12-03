const http = require('http')
const fs = require('fs')
const template = require('art-template')
const path = require('path')

const server = http.createServer()

server.on('request', (req, res) => {
  let url = req.url
  let rootUrl = path.resolve(__dirname, './www')

  let file = '/index.html'
  if (url !== '/') {
    file = url
  }

  console.log(rootUrl + file)

  let arr = [
    { name: '黄小帅', age: '18', work: 'code' },
    { name: '黄小帅', age: '18', work: 'code' },
    { name: '黄小帅', age: '19', work: 'code' },
    { name: '黄小帅', age: '18', work: 'code' },
    { name: '黄小帅', age: '18', work: 'code' }
  ]

  fs.readFile(rootUrl + file, (err, data) => {
    if (err) {
      return res.end('404 Not found')
    }
    console.log(data.toString())
    let temp = template.render(data.toString(), {
      name: '今天的天气很不好',
      text: '有的时候真的很无奈，最过分的是没地方说话',
      arr: arr,
      about: '/about.html'
    })
    res.end(temp)
  })
})

server.listen(8080, () => {
  console.log('Server is running...')
})