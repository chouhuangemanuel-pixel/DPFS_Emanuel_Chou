const express = require('express');
const router = express.Router();

// Requerimos el controlador de productos
const productController = require('../controllers/productController');

// 1. Listado de productos: GET /products
router.get('/', productController.index);

// 2. Formulario para crear un producto: GET /products/create (IMPORTANTE: antes de /:id)
router.get('/create', productController.create);

// 3. Formulario para editar un producto: GET /products/:id/edit
router.get('/:id/edit', productController.edit);

// 4. Detalle de un producto particular: GET /products/:id
router.get('/:id', productController.detail);

// 5. Procesar la creación de un nuevo producto: POST /products
router.post('/', productController.store);

// 6. Procesar la modificación de un producto existente: PUT /products/:id
router.put('/:id', productController.update);

// 7. Procesar la eliminación de un producto: DELETE /products/:id
router.delete('/:id', productController.destroy);

module.exports = router;
