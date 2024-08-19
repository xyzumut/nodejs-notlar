const http      = require('http');
const express   = require('express');
const parser    = require('body-parser'); // npm i body-parser

const adminRoutes   = require('./routes/yonetim');
const magazaRoutes  = require('./routes/magaza')

const app = express();

app.use(parser.urlencoded({extended: false}));
// rota gruplama mevzu
app.use('/yonetim', adminRoutes);
app.use(magazaRoutes);

// Tüm http metotlarını çeker
app.use('/',(req, res, next) => {
    // res.status(404);
    // res.send('<t1>404 Sayfası</t1>');
    res.status(404).send('<t1>404 Sayfası</t1>');
});

app.listen(3000);