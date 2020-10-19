const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/comments');

router.post('/:id', checkAuth, commentsCtrl.create);
router.get('/:id', checkAuth, commentsCtrl.show);


function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }


module.exports = router;