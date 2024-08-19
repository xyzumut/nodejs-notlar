const express   = require('express');

const router = express.Router();

router.get('/urun-ekle', (req, res, next) => {
    res.send(
        '<form action="/yonetim/urun" method="POST"> <input placeholder="Ürün Gir" type="text" name="deger"/> <button type="submit"> Ekle </button> </form>'
    );
});

router.use('/urun',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;