const express = require('express');
const router = express.Router();
const technologiesCtrl = require('../../controllers/technologies');

/* GET /api/ies */
router.get('/', technologiesCtrl.index);
router.get('/:id', technologiesCtrl.show);
router.post('/', technologiesCtrl.create);
// router.delete('/:id', technologiesCtrl.delete);
// router.put('/:id', technologiesCtrl.update);

module.exports = router;