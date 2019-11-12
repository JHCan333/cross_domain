/**
 *  通过CORS解决跨域问题
 */
<template>
    <div>
        <h3> 通过 CORS 解决跨域问题 </h3>
        <p>
            CORS:全称是"跨域资源共享"。通过此方式实现跨域的话，需要浏览器和服务器同时支持，才可以实现跨域请求，而前端没有什么改动。
            浏览器方面：几乎所有的浏览器目前都支持CORS，IE不能低于IE10。
            所以，服务器方面实现了CORS，就可以实现跨域通信
        </p>
        <h4>前端代码如下：</h4>
        <xmp>
            methods:{
                // 前端请求无变化
                get4000(){
                    var url = "http://0.0.0.0:4000/port"
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
            const express = require('express')
            const app = express()
            const opn = require('opn')
            const port = 4000

            // 服务器在返回头中 设置相应的 CORS 字段，就允许跨域请求
            app.all('*', function(req, res, next) {
                res.header("Access-Control-Allow-Origin", "http://localhost:2000"); // 该字段表明可跨域的源。值为 * 代表所有的都可以
                res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");// 表明服务器支持的所有头信息字段
                res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS"); // 此字段表示该服务所能接受的所有请求方式
                next();
            });

            // 对外开放的接口
            app.get('/port', (req, res) => res.send('Hello World!'))
            // 监听的端口号
            app.listen(port,'0.0.0.0', () => console.log('Example app listening on port 4000!'))

            // 打开浏览器，并且指定 url
            var url = 'http://0.0.0.0:'+ port +'/port'
            opn(url)
        </xmp>
        <button @click="get4000">发起请求(端口号：4000)</button>
    </div>
</template>

<script>
    export default {
        name: 'ByExpress',
        methods:{
            // 前端请求无变化
            get4000(){
                var url = "http://localhost:4000/port"
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