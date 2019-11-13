/**
 *  通过CORS解决跨域问题
 */
<template>
    <div>
        <h2> 通过 CORS 解决跨域问题 </h2>
        <div class="cross-mode-introduce">
            <p>CORS:全称是"跨域资源共享"。通过此方式实现跨域的话，需要浏览器和服务器同时支持，才可以实现跨域请求，而前端没有什么改动。</p>
            <p>浏览器方面：几乎所有的浏览器目前都支持CORS，IE不能低于IE10。</p>
            <p>所以，服务器方面实现了CORS，就可以实现跨域通信</p>
        </div>
        <div class="cross-code-box">
            <h3>前端代码如下：</h3>
            <xmp class="cross-code-area">
                methods:{
                    // 前端请求无变化
                    get4000(){
                        this.$http('http://localhost:4000/port').then((res)=>{
                            this.$Message.success('跨域成功!');
                        }).catch((err)=>{
                            this.$Message.error('跨域失败!');
                        })
                    }
                }
            </xmp>
        </div>
        <div class="cross-code-box">
            <h3>后端代码如下</h3>
            <xmp class="cross-code-area">
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
        </div>
        <div class="cross-btn-group">
            <Button @click="get4000" type="primary">发起请求(端口号：4000)</Button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ByExpress',
        methods:{
            // 前端请求无变化
            get4000(){
                this.$http('http://localhost:4000/port').then((res)=>{
                    this.$Message.success('跨域成功!');
                }).catch((err)=>{
                    this.$Message.error('跨域失败!');
                })
            }
        }
    }
</script>

<style scoped>

</style>