let menu = [{
    name:'guide',
    label:'跨域介绍',
},{
    name:'cookie',
    label:'cookie 跨域问题',
    children:[{
        name : 'cookieNoSolve',
        label:'cookie未解决示例'
    },{
        name : 'cookieDomain',
        label:'domain 跨域'
    }]
},{
    name:'iframe',
    label:'iframe 跨域问题',
    children:[{
        name : 'iframeNoSolve',
        label:'iframe未解决示例'
    },{
        name : 'fragmentIdentifier',
        label:'片段识别符跨域'
    },{
        name : 'iframeDomain',
        label:'domain跨域'
    },{
        name : 'postMessage',
        label:'postMessage跨域'
    },{
        name : 'windowName',
        label:'windowName跨域'
    }]
},{
    name:'ajax',
    label:'ajax 跨域问题',
    children:[{
        name : 'normal',
        label:'ajax未解决示例'
    },{
        name : 'cors',
        label:'CORS跨域'
    },{
        name : 'jsonp',
        label:'Jsonp跨域'
    },{
        name : 'imgPing',
        label:'imgPing跨域'
    },{
        name : 'webSocket',
        label:'WebSocket跨域'
    },{
        name : 'nginx',
        label:'nginx跨域'
    }]
}]

export default menu