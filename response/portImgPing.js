/**
 * 图像ping 跨域
 */
const express = require('express')
const app = express()
const opn = require('opn')
const port = require('./portSet')['imgPing']

// 记录点击次数
var counter = 0

// 对外开放的接口
app.get('/port', (req, res) => {
    counter++
    let logInfo = `已浏览广告${counter}次！`
    res.send(logInfo)
    // 在node运行后台可以看到当前点击次数。
    console.log(logInfo)
})
// 设置 当前程序 监听的 ip,端口号
app.listen(port, () => console.log(`图像ping服务启动成功!端口号：${port}`))

// 打开浏览器，并且指定url。
// var url = 'http://localhost:'+ port +'/port'
// opn(url)