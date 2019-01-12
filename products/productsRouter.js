const express = require('express');

const router = express.Router();

//middleware

//endpoints when url begins with /products

router.get('/', (req, res) => {
    res.send('GET /products endpoint');
});

// /products/:id
router.get('/:id',(req, res) => {
    res.send(`GET /products/${req.params.id}`);
});

module.exports = router;