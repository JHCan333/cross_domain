const express = require('express')
const path = require('path')
const app = express()
const opn = require('opn')
const port = 7001

var date = new Date()

app.get('/pdf', (req, res) => {
    res.header('Content-Type', 'application/pdf')
    res.sendFile(path.join(__dirname, './050003521280_33380625.pdf'))
})
 
// 设置 当前程序 监听的 ip,端口号
app.listen(port, '0.0.0.0', () => console.log('pdf 服务启动成功!'))

// 打开浏览器，并且指定url。
var url = 'http://localhost:' + port + '/pdf'
opn(url)