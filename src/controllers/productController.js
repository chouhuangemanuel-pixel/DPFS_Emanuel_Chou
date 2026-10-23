const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');

// Función auxiliar para leer y parsear los productos frescos en cada petición
function getProducts() {
    return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
}

const productController = {
    // 1. Mostrar el listado de productos en el Home / Catálogo (index.ejs)
    index: (req, res) => {
        const products = getProducts(); // Leemos los productos actualizados
        res.render('products/index', { products });
    },

    // 2. Mostrar el formulario de creación de productos (productCreate.ejs)
    create: (req, res) => {
        res.render('products/productCreate');
    },

    // 3. Mostrar el formulario de edición con los datos precargados (productEdit.ejs)
    edit: (req, res) => {
        const products = getProducts();
        const productId = req.params.id;
        const product = products.find(p => p.id == productId);
        
        if (!product) {
            return res.status(404).send('Producto no encontrado');
        }

        res.render('products/productEdit', { product });
    },

    // 4. Mostrar el detalle de un producto particular por su ID (productDetail.ejs)
    detail: (req, res) => {
        const products = getProducts(); // Leemos los productos actualizados
        const productId = req.params.id;
        const product = products.find(p => p.id == productId);
        
        if (!product) {
            return res.status(404).send('Producto no encontrado');
        }

        res.render('products/productDetail', { product });
    },

    // 5. Procesar la creación de un nuevo producto (Método POST)
    store: (req, res) => {
        const products = getProducts(); // Obtenemos el array actual

        // Creamos el nuevo producto con los datos de req.body
        const newProduct = {
            id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
            name: req.body.name,
            description: req.body.description || '',
            price: Number(req.body.price),
            category: req.body.category || 'Placas de Video',
            image: req.body.image || 'Placa RTX 4060.jpg' // Usa la imagen seleccionada o una predeterminada
        };

        // Agregamos el nuevo producto al array
        products.push(newProduct);

        // Guardamos el array actualizado en el archivo products.json
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2), 'utf-8');

        // Redirigimos al catálogo para ver el listado actualizado
        res.redirect('/products');
    },

    // 6. Procesar la modificación de un producto existente (Método PUT)
    update: (req, res) => {
        const products = getProducts();
        const productId = req.params.id;
        const productIndex = products.findIndex(p => p.id == productId);

        if (productIndex === -1) {
            return res.status(404).send('Producto no encontrado');
        }

        // Actualizamos las propiedades conservando el ID original
        products[productIndex] = {
            id: Number(productId),
            name: req.body.name,
            description: req.body.description || '',
            price: Number(req.body.price),
            category: req.body.category || 'Placas de Video',
            image: req.body.image || products[productIndex].image
        };

        // Guardamos el array actualizado en el archivo products.json
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2), 'utf-8');

        // Redirigimos al detalle del producto modificado para ver los cambios
        res.redirect('/products/' + productId);
    },

    // 7. Procesar la eliminación de un producto existente (Método DELETE)
    destroy: (req, res) => {
        const products = getProducts();
        const productId = req.params.id;
        const filteredProducts = products.filter(p => p.id != productId);

        if (filteredProducts.length === products.length) {
            return res.status(404).send('Producto no encontrado para eliminar');
        }

        // Guardamos el array filtrado en el archivo products.json
        fs.writeFileSync(productsFilePath, JSON.stringify(filteredProducts, null, 2), 'utf-8');

        // Redirigimos al catálogo
        res.redirect('/products');
    }
};

module.exports = productController;
