const {Router} = require('express');
const addConductor = require('../../controllers/conductor/add.controller.js');
const {getAll, getById} = require('../../controllers/conductor/get.controller.js');
const deleteConductor = require('../../controllers/conductor/delete.controller.js');
const editConductor = require('../../controllers/conductor/edit.controller.js');

const router = Router();

router.post('/', addConductor);
router.get('/', getAll);
router.get('/:id', getById);
router.delete('/:id', deleteConductor);
router.put('/:id', editConductor);

module.exports = router;