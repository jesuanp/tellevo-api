const {Router} = require('express');
const addAdmin = require('../../controllers/admin/add.controller.js');
const {getAll, getById} = require('../../controllers/admin/get.controller.js');
const deleteAdmin = require('../../controllers/admin/delete.controller.js');

const router = Router();

router.post('/', addAdmin);
router.get('/', getAll);
router.get('/:id', getById);
router.delete('/:id', deleteAdmin);

module.exports = router;