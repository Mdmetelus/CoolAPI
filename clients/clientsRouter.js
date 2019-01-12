// routers are like mini applications
const express = require('express');

const router = express.Router();

//middleware

//endpoints  when url begins with /clients
router.geet('/', (req, res) => {
    res.send('GET /clients endpoint');
});

/ /clients/:id
router.get('/:id', (req, res) => {
  res.send(`GET /clients/${req.params.id}`);
});

module.exports = router;
