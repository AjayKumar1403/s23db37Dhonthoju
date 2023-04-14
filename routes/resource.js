var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var ring_controller = require('../controllers/ring');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// ring ROUTES ///
// POST request for creating a ring.
router.post('/rings', ring_controller.ring_create_post);
// DELETE request to delete ring.
router.delete('/rings/:id', ring_controller.ring_delete);
// PUT request to update ring.
router.put('/rings/:id', ring_controller.ring_update_put);
// GET request for one ring.
router.get('/rings/:id', ring_controller.ring_detail);
// GET request for list of all ring items.
router.get('/rings', ring_controller.ring_list);
module.exports = router;