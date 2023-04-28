var express = require('express');
const ring_controlers = require('../controllers/ring');
var router = express.Router();

/* GET home page. */
router.get('/', ring_controlers.ring_view_all_Page);



/* GET detail ring page */
router.get('/detail', ring_controlers.ring_view_one_Page);

/* GET create update page */
router.get('/update', ring_controlers.ring_update_Page);

/* GET create ring page */
router.get('/create', ring_controlers.ring_create_Page);

/* GET delete ring page */
router.get('/delete', ring_controlers.ring_delete_Page);

/* GET update ring page */
router.get('/update', ring_controlers.ring_update_Page);








module.exports = router;



