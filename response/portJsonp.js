/**
 * 支持 jsonp 跨域的服务
 */

const express = require('express')
const app = express()
const opn = require('opn')
const port = require('./portSet')['jsonp']

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

// 设置 当前程序 监听的 ip,端口号
app.listen(port, () => console.log(`jsonp服务启动成功!端口号：${port}`))


// 打开浏览器，并且指定url。
var url = 'http://localhost:'+ port +'/port'
// opn(url)