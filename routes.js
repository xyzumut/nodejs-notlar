const fs = require('fs');

const requestHandler = (req, res) => {
    
    const url    = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html; charset=UTF-8');
        res.write('<html>');
        res.write('<head><title>Giriş Yap</title></head><body>');
        res.write('<form action="/message" method="POST">');
        res.write('<input type="text" name="message">');
        res.write('</form></body>');
        res.write('<button type="submit">Gönder</button>');
        res.write('</html>');
        return res.end(); 
    }
    
    if(url === '/message' && method === 'POST'){
    
        const body = [];
    
        req.on('data', (chunk) => {
            body.push(chunk);
        });
    
        // Bu event dinleyicisini return ederek işlemi sonlandırdık
        // bu sayede if dışındaki kısımlara girmeden işlem sonlandı
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message  = parsedBody.split('=')[1]
    
            fs.writeFile('deneme.txt', message, (err) => {
                res.writeHead(301, {
                    location:'/'
                });
                return res.end(); 
            })
        })
    }
    
    res.write('<html>');
    res.write('<h1>Yanlis istek</h1>');
    res.write('</html>');
    res.end();
}

module.exports = requestHandler;
// module.exports.umut = requestHandler;
// module.exports = {umut:requestHandler};