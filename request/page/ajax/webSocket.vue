/**
*  通过 webSocket  解决跨域问题
*/
<template>
    <div>
        <h2>通过 webSocket 解决跨域问题</h2>
        <div class="cross-mode-introduce">
            <p>WebSocket是一种在单个TCP连接上进行全双工通信的协议，使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。</p>
            <p>在WebSocket API中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。</p>
            <p>可以根据这个特性解决跨域问题。</p>
        </div>
        <div class="cross-code-box">
            <h3>前端代码如下</h3>
            <xmp class="cross-code-area">
                import io from 'socket.io-client'
                // 建立 websocket 连接。本来端口号写的6000，但是谷歌浏览器禁止用 6000，所以改的 6001
                var socket = io('http://0.0.0.0:6001/')
                // open 为 server 端，发出的事件，能接收到就代表 websocket 连接成功
                socket.on('open', () => {
                    console.log('websocket 连接成功！')
                })
                // sendData 为 server 端发出数据的事件，前端接收到后会弹窗出来。
                socket.on('sendData', (res) => {
                    alert("请求成功：" + res)
                })

                export default {
                    name: 'ByWebSocket',
                    methods: {
                        // 向建立好的 socket 后端发出请求
                        request () {
                            socket.emit('getData')
                        }
                    }
                }
            </xmp>
        </div>
        <div class="cross-code-box">
            <h3>后端代码如下</h3>
            <xmp class="cross-code-area">
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
                var url = 'http://0.0.0.0:' + port
                opn(url)
            </xmp>
        </div>
        <div class="cross-btn-group">
            <Button @click="request" type="primary">发起请求(端口号：3000)</Button>
        </div>
    </div>
</template>

<script>
    import io from 'socket.io-client'
    // 建立 websocket 连接。本来端口号写的6000，但是谷歌浏览器禁止用 6000，所以改的 6001
    var socket = io('http://localhost:6001/')
    // open 为 server 端，发出的事件，能接收到就代表 websocket 连接成功
    socket.on('open', () => {
        console.log('websocket 连接成功！')
    })


    export default {
        name: 'ByWebSocket',
        mounted(){
            // sendData 为 server 端发出数据的事件，前端接收到后会弹窗出来。
            socket.on('sendData', (res) => {
                this.$Message.success(`请求成功：${res}`)
            })
        },
        methods: {
            // 向建立好的 socket 后端发出请求
            request () {
                socket.emit('getData')
            }
        }
    }
</script>

<style scoped>

</style>