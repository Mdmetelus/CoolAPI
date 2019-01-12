const expres = require('express');

const productsRouter = require('../products/productsRouter.js');
const clientsRouter = require('../clients/clientsRouter.js');

const router = express.Router();

router.use('/products', productsRouter);
router.use('/clients', clientsRouter);

module.exports = router;
