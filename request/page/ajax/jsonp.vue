/**
 *  通过 JSONP 解决跨域问题
 */
<template>
    <div>
        <h2>通过 Jsonp 解决跨域问题 </h2>
        <div class="cross-mode-introduce">
            <p>因为html的script标签的src属性，在同源问题上是个例外。所以可以利用src，向指定URL发出请求。</p>
            <p>而返回的数据是插入文档的js代码,前后端约定好定义函数名称的字段，后端会把函数名称以及返回值拼接成js函数加载到文档中来运行。</p>
            <p>和图像ping相比，需要把此标签放入文档中运行。而图像ping则不需要。</p>
        </div>
        <div class="cross-code-box">
            <h3>前端代码如下</h3>
            <xmp class="cross-code-area">
                methods:{
                    // 请求接口的方法
                    get5000(ifValid){
                        this.setJavaScriptFunction();// 设置好处理返回值的函数
                        var name = ifValid ? 'lilei' : 'visitor'; // lilei 是合法用户，visitor 是游客，无访问权限
                        var url = "http://localhost:5000/port?name=" + name +"&pwd=123456&callback=showAjaxInfo" // jsonp 的请求链接

                        // 开始 jsonp 请求
                        var script = document.createElement('script');
                        script.setAttribute('src',url);
                        script.setAttribute('type','text/javascript');
                        document.getElementsByTagName('head')[0].appendChild(script)
                    },
                    // 在 html 页面添加 js 方法，用于处理 jsonp 的函数
                    setJavaScriptFunction(){
                        var script = document.createElement('script');
                        script.setAttribute('type','text/javascript');
                        script.innerHTML = `
                            window.showAjaxInfo = function (){
                                alert("引用vue方法失败！");
                            }
                        `;
                        document.getElementsByTagName('head')[0].appendChild(script)
                        // 使用Vue组件内部的方法替换掉 window 中的 showAjaxInfo。注意 this 的指向问题。
                        let that = this
                        window.showAjaxInfo = function(res){
                            if(res.success){
                                that.$Message.success(`请求成功：结果是【${res.data}】`);
                            } else {
                                that.$Message.error(`请求失败：结果是【${res.data}】`);
                            }
                        }
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
                const port = 5000

                // 可用的用户列表
                const userList = ['lilei','hanmeimei']

                // 用户身份检验，我写的这个是个小demo，实际情况下会更加的复杂
                function valid (name, pwd) {
                    return  !!name && !!pwd && userList.includes(name.toLowerCase()) && pwd.toLowerCase() === '123456'
                }

                // 访问成功的返回值
                const successData = {
                    success:true,
                    data:'Hello World!'
                }

                // 访问失败的返回值
                const failData = {
                    success:false,
                    data:'Bye Bye!'
                }

                // 首先，校验当前用户的权限；通过校验的请求会返回数据，没有通过的返回错误信息。
                app.get('/port', (req, res) => {
                    let {name, pwd, callback} = req.query
                    if (!!valid(name, pwd)) {
                        let content = callback + `(${JSON.stringify(successData)})`
                        res.send(content)
                    } else {
                        let content = callback + `(${JSON.stringify(failData)})`
                        res.send(content)
                    }
                })

                // 设置 当前程序 监听的 端口号
                app.listen(port, '0.0.0.0', () => console.log('Example app listening on port 3000!'))

                // 打开浏览器，指定端口。
                var url = 'http://0.0.0.0:' + port + '/port'
                opn(url)
            </xmp>
        </div>
        <div class="cross-btn-group">
            <Button @click="get5000(true)" type="primary">发起请求(端口号：5000)【合法用户】</Button>
            <Button @click="get5000(false)" type="error">发起请求(端口号：5000)【非法用户】</Button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ByJsonp',
        methods:{
            // 请求接口的方法
            get5000(ifValid){
                this.setJavaScriptFunction();// 设置好处理返回值的函数
                var name = ifValid ? 'lilei' : 'visitor'; // lilei 是合法用户，visitor 是游客，无访问权限
                var url = "http://localhost:5000/port?name=" + name +"&pwd=123456&callback=showAjaxInfo" // jsonp 的请求链接

                // 开始 jsonp 请求
                var script = document.createElement('script');
                script.setAttribute('src',url);
                script.setAttribute('type','text/javascript');
                document.getElementsByTagName('head')[0].appendChild(script)
            },
            // 在 html 页面添加 js 方法，用于处理 jsonp 的函数
            setJavaScriptFunction(){
                var script = document.createElement('script');
                script.setAttribute('type','text/javascript');
                script.innerHTML = `
                    window.showAjaxInfo = function (){
                        alert("引用vue方法失败！");
                    }
                `;
                document.getElementsByTagName('head')[0].appendChild(script)
                // 使用Vue组件内部的方法替换掉 window 中的 showAjaxInfo。注意 this 的指向问题。
                let that = this
                window.showAjaxInfo = function(res){
                    if(res.success){
                        that.$Message.success(`请求成功：结果是【${res.data}】`);
                    } else {
                        that.$Message.error(`请求失败：结果是【${res.data}】`);
                    }
                }
            }
        }
    }
</script>