const {Router} = require('express');
const addUser = require('../../controllers/user/add.controller.js');
const {getAll, getById} = require('../../controllers/user/get.controller.js');
const deleteUser = require('../../controllers/user/delete.controller.js');
const editUser = require('../../controllers/user/edit.controller.js');

const router = Router();

router.post('/', addUser);
router.get('/', getAll);
router.get('/:id', getById);
router.delete('/:id', deleteUser);
router.put('/:id', editUser);

module.exports = router;