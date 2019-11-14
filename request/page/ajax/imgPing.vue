<template>
    <div>
        <h2>通过 Jsonp 解决跨域问题 </h2>
        <div class="cross-mode-introduce">
            <p>因为html的img标签的src属性，在同源问题上是个例外，所以可以利用这个特性，来处理跨域问题</p>
            <p>新图像只要设置了src属性就会下载，不需要放到文档中即可运行。常用来记录广告点击次数。</p>
            <p>优点是：兼容性非常好。</p>
            <p>缺点是：只能使用get请求，且无法获取相应文本。</p>
        </div>
        <div class="cross-code-box">
            <h3>前端代码如下</h3>
            <xmp class="cross-code-area">
                // 点击图片，模拟广告点击
                getImgPing () {
                    var img = new Image()
                    img.onload = img.onerror = function (res) {
                        this.$Message.success('广告点击次数+1！')
                        // 这里会发现不能打印出接口的返回值
                        console.log('res', res)
                        // 完成请求后释放资源
                        img = null
                    }
                    img.src = 'http://localhost:5002/port'
                }
            </xmp>
        </div>
        <div class="cross-code-box">
            <h3>后端代码如下</h3>
            <xmp class="cross-code-area">
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
                    let logInfo = `已点击广告${counter}次！`
                    res.send(logInfo)
                    console.log(logInfo)
                })
                // 设置 当前程序 监听的 ip,端口号
                app.listen(port, () => console.log(`图像ping服务启动成功!端口号：${port}`))
            </xmp>
        </div>
        <div class="cross-btn-group">
            <img src="../../static/image/guanggao.jpg" title="这是广告，来点击我" @click="getImgPing()"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'imgPing',
        methods: {
            // 点击图片，模拟广告点击
            getImgPing () {
                var img = new Image()
                img.onload = img.onerror =  (res) => {
                    console.log('res', res)
                    this.$Message.success('广告点击次数+1！')
                    img = null
                }
                img.src = 'http://localhost:5002/port'
            }
        }
    }
</script>

<style scoped>

</style>