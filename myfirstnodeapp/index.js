const http = require('http')
var server = http.createServer(function(req, res) {
    res.write('yes')
    res.end()
})

server.listen(3000)
// var fs = require('fs')


// fs.readFile('myfile.txt', {encoding: 'utf-8'}, function(err, data) {
//     console.log(data)
// })