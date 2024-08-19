const express   = require('express');
const path      = require('path');

const router = express.Router();

router.get('/',(req, res, next) => {
    // path.join kullanmanın sebebi işletim sistemini algılayıp eğik çizgileri algılaması
    res.sendFile(path.join(global.myRoot, 'views', 'anasayfa.html'));
});

module.exports = router;