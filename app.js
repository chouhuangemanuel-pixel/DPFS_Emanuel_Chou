const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.get('/', (req, res) => {
    res.send('¡Servidor funcionando correctamente!');
});
// Ruta para mostrar el formulario de creación de productos
app.get('/products/create', (req, res) => {
    res.render('products/productCreate');
});

// Ruta para mostrar el formulario de edición de productos (recibe un ID opcional por ahora)
app.get('/products/edit/:id', (req, res) => {
    res.render('products/productEdit');
});
// Levantar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});