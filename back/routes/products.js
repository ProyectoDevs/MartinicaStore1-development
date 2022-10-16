const express=require("express");
const router=express.Router();

const {getProducts, newProduct, getProductById, updateProduct} = require("../controllers/productsController") //Traemos la respuesta json desde el controlador

router.route('/productos').get(getProducts); //Establecemos desde qué ruta queremos ver el getProducts
router.route('/producto/nuevo').post(newProduct); //Establecemosla ruta
router.route('/producto/:id').get(getProductById); //Ruta para consultar por id
router.route('/producto/:id').put(updateProduct); //Creación de la ruta de la actualización
//router.route('./producto:id').delete(deleteProduct); // eliminar el producto seleccionado

module.exports = router;