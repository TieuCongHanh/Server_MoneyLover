const express = require('express');
const router = express.Router();

const transactionController = require('../app/controllers/TransactionController');
const { authenToken } = require('../middlewares/auth');

router.get('/',authenToken, transactionController.showAll);
router.get('/:id',authenToken, transactionController.show);
router.post('/create', authenToken, transactionController.create);
router.post('/update',authenToken, transactionController.update);
router.delete('/delete',authenToken, transactionController.destroy);

// Get Screens




module.exports = router;