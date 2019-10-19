const express = require('express')
const path = require('path')
const app = express()
const opn = require('opn')
const port = 7000

app.get('/html', (req, res) => res.sendFile(path.join(__dirname, './iframeTransferStation.html')))

// 设置 当前程序 监听的 ip,端口号
app.listen(port, '0.0.0.0', () => console.log('iframe 服务启动成功!'))

// 打开浏览器，并且指定url。
var url = 'http://0.0.0.0:' + port + '/html'
opn(url)