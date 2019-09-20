/**
 * 一个简单的服务，不支持跨域
 */
const express = require('express')
const app = express()
const opn = require('opn')
const port = 3000
// 对外开放的接口
app.get('/port', (req, res) => res.send('Hello World!'))
// 设置 当前程序 监听的 ip,端口号
app.listen(port, '0.0.0.0', () => console.log('Example app listening on port 3000!'))
// 打开浏览器，并且指定url。
var url = 'http://0.0.0.0:' + port + '/port'
opn(url)