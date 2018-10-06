var http = require('http');
var conn = http.createServer((req, res) =>{
    res.write('Bismillah !!');
    console.log('Test');
    res.end();
}).listen(8000);
