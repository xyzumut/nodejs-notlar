const express   = require('express');

const router = express.Router();

router.get('/',(req, res, next) => {
    res.send('<t2>Mağaza Sayfası</t2>');
});

module.exports = router;