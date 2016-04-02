const express = require('express');

const indexController = require('server/controllers/index');

const router = new express.Router();
router.get('/', indexController);


module.exports = router;