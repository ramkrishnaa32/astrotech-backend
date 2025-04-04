const express = require('express');
const router = express.Router();
const astrologerController = require('../controllers/astrologer.controller');

router.get('/', astrologerController.getAllAstrologers);
router.get('/:id', astrologerController.getAstrologerById);

module.exports = router;
