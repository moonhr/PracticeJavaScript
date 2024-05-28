const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const memberNames = ["Alice", "Bob", "Charlie"]; // 기존 데이터셋
const chams = require('./champion.json'); // 챔피언 데이터
let submittedData = []; // 제출된 데이터를 저장할 배열

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    // 정적 파일 제공
    if (req.method === 'GET' && pathname.startsWith('/public/')) {
        const filePath = path.join(__dirname, pathname);
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': getContentType(filePath) });
                res.end(data);
            }
        });
        return;
    }

    if (req.method === 'POST' && pathname === '/validate-name') {
        handleRequest(req, res, (body) => {
            const { name } = JSON.parse(body);
            const valid = memberNames.includes(name);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ valid }));
        });
    } else if (req.method === 'POST' && pathname === '/validate-cham') {
        handleRequest(req, res, (body) => {
            const { cham } = JSON.parse(body);
            const validChamNames = Object.values(chams.data).map(champ => champ.name);
            const valid = validChamNames.includes(cham);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ valid }));
        });
    } else if (req.method === 'POST' && pathname === '/submit') {
        handleRequest(req, res, (body) => {
            const { name, line, cham } = JSON.parse(body);
            const validName = memberNames.includes(name);
            const validChamNames = Object.values(chams.data).map(champ => champ.name);
            const validCham = validChamNames.includes(cham);

            if (validName && validCham && line) {
                const data = { name, line, cham };
                submittedData.push(data);
                // 모든 데이터를 JSON 파일로 저장
                fs.writeFileSync('submittedData.json', JSON.stringify(submittedData, null, 2));
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true }));
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false }));
            }
        });
    } else if (req.method === 'GET' && pathname === '/submitted-data') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(submittedData));
    } else if (req.method === 'GET' && pathname === '/download-json') {
        const filePath = path.join(__dirname, 'submittedData.json');
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Content-Disposition': 'attachment; filename="submittedData.json"'
        });
        fs.createReadStream(filePath).pipe(res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});

function handleRequest(req, res, callback) {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        callback(body);
    });
}

function getContentType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    switch (ext) {
        case '.html': return 'text/html';
        case '.js': return 'application/javascript';
        case '.css': return 'text/css';
        case '.json': return 'application/json';
        default: return 'application/octet-stream';
    }
}
