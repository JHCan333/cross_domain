/**
 *  一个简单的请求，没有处理跨域问题
 */
<template>
    <div>
        <h2>一个简单的请求，没有处理跨域问题</h2>
        <div class="cross-code-box">
            <h3>前端代码如下：</h3>
            <xmp class="cross-code-area">
                methods:{
                    // 一个简单的请求，不能跨域
                    get3000(){
                        this.$http('http://localhost:3000/port').then((res)=>{
                            this.$Message.success('跨域成功!');
                        }).catch((err)=>{
                            this.$Message.error('跨域失败!');
                        })
                    }
                }
            </xmp>
        </div>
        <div class="cross-code-box">
            <h3>后端代码如下：</h3>
            <xmp class="cross-code-area">
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
        </div>
        <div class="cross-btn-group">
            <Button @click="get3000" type="primary">发起请求(端口号：3000)</Button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Normal',
        methods:{
            // 一个简单的请求，不能跨域
            get3000(){
                this.$http('http://localhost:3000/port').then((res)=>{
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