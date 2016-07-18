var express = require('express'),
    router  = new express.Router();

// Require controllers.
var pagesController = require('../controllers/pages');
var usersController = require('../controllers/users');
var logsController  = require('../controllers/logs')

// root path:
router.get('/', pagesController.welcome);

// users resource paths:
router.get('/users',     usersController.index);
router.get('/users/:id', usersController.show);

router.get('/logs',      logsController.index);
router.get('/logs/:id',  logsController.show);

module.exports = router;
