const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/controller.js');

// Rutas para el recurso "Proyecto"
router.post('/api/proyectos', proyectoController.create);
router.get('/api/proyectos', proyectoController.retrieveAll);
router.get('/api/proyectos/:id', proyectoController.getById);
router.put('/api/proyectos/:id', proyectoController.updateById);
router.delete('/api/proyectos/:id', proyectoController.deleteById);

module.exports = router;
