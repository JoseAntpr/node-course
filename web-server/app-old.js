const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content.type': 'applicationn/json'});
    let output = {
        name: 'jose',
        age: 27,
        url: req.url
    }
    res.write(JSON.stringify(output));
    res.end();
})
.listen(3000);

console.log("Escuchando en puerto 3000");