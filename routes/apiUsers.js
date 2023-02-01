const express = require('express');
const router = express.Router();
const controller = require ('../controller/apiUserController')

router.post('/register', controller.registerAPIUser)
router.post('/token', controller.generateAccessToken)

module.exports = router;
