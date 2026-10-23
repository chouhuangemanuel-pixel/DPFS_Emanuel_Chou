const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

// 1. Configuración de archivos estáticos y vistas EJS
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// Middlewares para capturar datos de formularios y JSON en req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Middleware para habilitar verbos PUT y DELETE en formularios mediante ?_method=
app.use(methodOverride('_method'));

// Requerimos el controlador para las rutas directas de Home y Carrito
const productController = require('./src/controllers/productController');

// 2. Rutas directas para Home y Carrito
app.get('/', productController.index);
app.get('/cart', (req, res) => res.render('products/productCart'));

// 3. Requerimos y montamos las rutas de productos bajo /products
const productRoutes = require('./src/routes/productRoutes');
app.use('/products', productRoutes);

// 4. Encender el servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
