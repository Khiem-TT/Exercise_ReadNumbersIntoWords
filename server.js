const http = require('http');
const fs = require('fs');
const qs = require('qs');
const app = require('./app.js');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        fs.readFile('./index.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        });
        req.on('end', () => {
            data = qs.parse(data);
            fs.readFile('./index.html', 'utf-8', (err, dataHtml) => {
                if (err) {
                    console.log(err);
                }
                let inputNumber = +data.text;
                let result = app.main(inputNumber);
                dataHtml = dataHtml.replace('{result}', result);
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(dataHtml);
                return res.end();
            });
        });
        req.on('error', () => {
            console.log('error');
        });
    }
});

server.listen(8080, () => {
    console.log('server running at localhost:8080');
});