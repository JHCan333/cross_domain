var exec = require('child_process').exec
var path = require('path')
var url = path.resolve() + ""
console.log('url', url)
var ifAtRoot = url.split(path.sep).reverse()[0] === 'cross_domain'
console.log('ifAtRoot', ifAtRoot)
var relativePath = ifAtRoot ? (url + path.sep + 'response') : url
var port3000Path = `${relativePath}${path.sep}port3000.js`

var port3000 = exec(`node ${url}/port3000.js`, (error, stdout, stderr) => {
    if (error) {
        console.error(`执行的错误3000: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
})
var port4000 = exec(`node ${url}/port4000.js`, (error, stdout, stderr) => {
    if (error) {
        console.error(`执行的错误4000: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
})
var port5000 = exec(`node ${url}/port5000.js`, (error, stdout, stderr) => {
    if (error) {
        console.error(`执行的错误5000: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
})