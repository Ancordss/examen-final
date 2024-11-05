
let express = require('express');
let router = express.Router();
 
const clients = require('../controllers/client.controller.js');

router.post('/api/clients/create', clients.create);
router.get('/api/clients/all', clients.retrieveAllclients);
router.put('/api/clients/update/:id', clients.updateById);
router.delete('/api/clients/delete/:id', clients.deleteById);

module.exports = router;