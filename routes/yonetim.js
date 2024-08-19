const express   = require('express');
const path      = require('path');

const router = express.Router();

router.get('/urun-ekle', (req, res, next) => {
    res.sendFile(path.join(global.myRoot, 'views', 'urun-ekle.html'));
});

router.use('/urun',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;