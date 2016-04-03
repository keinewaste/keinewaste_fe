const express = require('express');

const userController = require('server/controllers/user');

const router = new express.Router();

router.route('/session')
    .get(userController.getSession)
    .post(userController.saveSession);

module.exports = router;