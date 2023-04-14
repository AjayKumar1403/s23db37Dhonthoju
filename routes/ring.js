var express = require('express');
const ring_controlers= require('../controllers/ring');
var router = express.Router();

/* GET home page. */
router.get('/',  ring_controlers.ring_view_all_Page);

module.exports = router;