const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/comments');

router.post('/:id', commentsCtrl.create);

module.exports = router;