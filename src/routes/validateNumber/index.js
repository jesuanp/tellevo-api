const { Router } = require('express');
const validateNumber = require('../../controllers/validateNumber/index.js');

const router = Router();

router.post('/', validateNumber);

module.exports = router;
