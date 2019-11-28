// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

/* GET - home page. */
router.get('/', mainController.root);
router.get('/music', mainController.music);
router.get('/about', mainController.about);
router.get('/contact', mainController.contact);

module.exports = router;
