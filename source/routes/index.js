const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html' );
});
router.get('/tips', (req, res) => {
    res.render('tips.html');
});
router.get('/acerca', (req, res) => {
    res.render('acerca.html');
});
router.get('/registro', (req, res) => {
    res.render('registro.html');
});

module.exports = router;