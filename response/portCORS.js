/**
 * 支持 CORS 跨域的服务
 */

const express = require('express')
const app = express()
const opn = require('opn')
const port = 4000

// 服务器在返回头中 设置相应的 CORS 字段，就允许跨域请求
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:2000') // 该字段表明可跨域的源。值为 * 代表所有的都可以
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type')// 表明服务器支持的所有头信息字段
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS') // 此字段表示该服务所能接受的所有请求方式
    next()
})

// 对外开放的接口
app.get('/port', (req, res) => res.send('Hello World!'))
// 监听的端口号
app.listen(port, '0.0.0.0', () => console.log('CORS服务启动成功！'))

// 打开浏览器，并且指定 url
var url = 'http://0.0.0.0:' + port + '/port'
opn(url)