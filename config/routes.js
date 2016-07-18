var express = require('express'),
    router  = new express.Router();

// Require controllers.
var pagesController = require('../controllers/pages');
var usersController = require('../controllers/users');
var logsController  = require('../controllers/logs')

// root path:
router.get('/', pagesController.welcome);

// users resource paths:
// router.get('/users',     usersController.index);
router.get('/users/:id', usersController.show);
// router.post('/login',       usersController.userAuth);
router.get('/users',        usersController.index);
// router.post('/users',       usersController.userCreate);
router.get('/users/:id',    usersController.show);
// router.put('/users/:id',    usersController.userUpdate);
// router.delete('/users/:id', usersController.userDelete);

// router.get('/logs',      logsController.index);
// router.get('/logs/:id',  logsController.show);

router.get('/logs/:id',    logsController.show);
router.get('/logs',        logsController.index);
router.post('/logs',       logsController.create);
// router.put('/logs/:id',    logsController.update);
// router.delete('/logs/:id', logsController.delete);

module.exports = router;
