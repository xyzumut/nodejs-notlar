const http      = require('http');
const express   = require('express');
const parser    = require('body-parser'); // npm i body-parser


const app = express();

app.use(parser.urlencoded({extended: false}));

app.post('/urun-ekle', (req, res, next) => {
    res.send('<form action="/urun" method="POST"> <input placeholder="Ürün Gir" type="text" name="deger"/> <button type="submit"> Ekle </button> </form>')
});

app.use('/urun',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req, res, next) => {
    res.send('<t2>Ana Sayfa</t2>');
});



app.listen(3000);