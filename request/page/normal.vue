/**
 *  一个简单的请求，没有处理跨域问题
 */
<template>
    <div>
        <h3>一个简单的请求，没有处理跨域问题</h3>
        <h4>前端代码如下</h4>
        <xmp>
            methods:{
                // 一个简单的请求，不能跨域
                get3000(){
                    var url = "http://0.0.0.0:3000/port"
                    this.$http(url).then((res)=>{
                        console.log('res',res)
                        alert('跨域成功')
                    }).catch((err)=>{
                        console.log('err',err)
                        alert('跨域失败')
                    })
                }
            }
        </xmp>
        <h4>后端代码如下</h4>
        <xmp>
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
        </xmp>
        <button @click="get3000">发起请求(端口号：3000)</button>
    </div>
</template>

<script>
    export default {
        name: 'Normal',
        methods:{
            // 一个简单的请求，不能跨域
            get3000(){
                var url = "http://localhost:3000/port"
                this.$http(url).then((res)=>{
                    console.log('res',res)
                    alert('跨域成功')
                }).catch((err)=>{
                    console.log('err',err)
                    alert('跨域失败')
                })
            }
        }
    }
</script>

<style scoped>

</style>