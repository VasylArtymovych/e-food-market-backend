const { Router } = require('express');
const { testCtrl } = require('../controllers');

const router = Router();


router.get('/', testCtrl.getAll);


module.exports = router;
