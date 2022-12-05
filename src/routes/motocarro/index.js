const {Router} = require('express');
const addMotocarro = require('../../controllers/motocarro/add.controller.js');
const {getAll, getById} = require('../../controllers/motocarro/get.controller.js');
const deleteMotocarro = require('../../controllers/motocarro/delete.controller.js');
const editMotocarro = require('../../controllers/motocarro/edit.controller.js');

const router = Router();

router.post('/', addMotocarro);
router.get('/', getAll);
router.get('/:id', getById);
router.delete('/:id', deleteMotocarro);
router.put('/:id', editMotocarro);

module.exports = router;