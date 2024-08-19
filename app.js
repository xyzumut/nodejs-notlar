const http      = require('http');
const express   = require('express');
const parser    = require('body-parser'); // npm i body-parser
const path      = require('path');
global.myRoot   = path.join(require.main.path);

const adminRoutes   = require('./routes/yonetim');
const magazaRoutes  = require('./routes/magaza');

const app = express();

app.use(parser.urlencoded({extended: false}));

app.use('/yonetim', adminRoutes);
app.use(magazaRoutes);
app.use('/test', (req, res, next) => {
    res.json(rootDir);
});

app.use('/',(req, res, next) => {
    res.status(404).sendFile(path.join(global.myRoot, 'views', '404.html'));
});

app.listen(3000);