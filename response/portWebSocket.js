/**
 * websocket 解决跨域
 */
const express = require('express')
const app = new express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const opn = require('opn')
const port = 6001

// 对外开放的接口
app.all('*', (req, res) => res.send('Hello World!'))

//监听socket connect事件，能收到代表连接成功
io.on('connection', socket => {
    socket.emit('open') // 派发 open 事件， 通知客户端已连接
    console.log('connected')

    // 接收前端对数据的请求
    socket.on('getData', () => {
        // 对前端请求作出回应
        socket.emit('sendData', 'hello word')
    })

    //监听disconnect事件，断开连接后，打印 "disconnect"
    socket.on('disconnect', () => {
        console.log('disconnect')
    })
})

// 通过 6001 端口监听服务，本来写的是6000，但是谷歌浏览器禁止使用6000端口，所以改的6001
server.listen(port)

// 打开浏览器，并且指定url。
var url = 'http://localhost:' + port
opn(url)


