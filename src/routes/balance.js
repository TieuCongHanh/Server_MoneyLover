const express = require('express');
const router = express.Router();

const balanceController = require('../app/controllers/BalanceController');
const { authenToken } = require('../middlewares/auth');

router.get('/', authenToken, balanceController.show);
router.post('/create', authenToken, balanceController.create);



module.exports = router;