const router = require('express').Router();

const routerUser = require('./user/index.js');
const routerConductor = require('./conductor/index.js');
const routerMotocarro = require('./motocarro/index.js');
const routerAdmin = require('./admin/index.js');

router.use('/user', routerUser);
router.use('/conductor', routerConductor);
router.use('/motocarro', routerMotocarro);
router.use('/admin', routerAdmin);

module.exports = router;
