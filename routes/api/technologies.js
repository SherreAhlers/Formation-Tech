const express = require('express');
const router = express.Router();
const technologiesCtrl = require('../../controllers/technologies');

/* GET /api/ies */
router.get('/', checkAuth, technologiesCtrl.index);
router.get('/:id', checkAuth, technologiesCtrl.show);
router.post('/', checkAuth, technologiesCtrl.create);
router.delete('/:id', checkAuth, technologiesCtrl.deleteOne);
router.put('/:id', checkAuth, technologiesCtrl.update);



/*--  Helper Functions --*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }


module.exports = router;