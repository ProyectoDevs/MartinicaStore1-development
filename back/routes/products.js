<<<<<<< HEAD
const express=require("express")
=======
const express=require("express");
>>>>>>> jules
const router=express.Router();

const {getProducts, 
    newProduct, 
    getProductById, 
    updateProduct, 
    deleteProduct, 
    createProductReview,
    getProductReviews,
    deleteReview
} = require("../controllers/productsController"); //Traemos la respuesta json desde el controlador
<<<<<<< HEAD
const { isAuthenticatedUser , authorizeRoles} = require("../middleware/auth");


//Probemos autenticación
router.route('/productos').get(getProducts)  //Establecemos desde que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(isAuthenticatedUser, authorizeRoles("admin"), newProduct); //establecemos la ruta
router.route('/producto/:id').get(getProductById); //Ruta para consultar por id
router.route('/producto/:id').put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct);//Creacion de la ruta de actualizacion
router.route('/producto/:id').delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct); //Creacion de la ruta de eliminacion por id
=======
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route('/productos').get(getProducts); //Establecemos desde qué ruta queremos ver el getProducts
router.route('/producto/nuevo').post(isAuthenticatedUser, authorizeRoles("admin"), newProduct); //Establecemosla ruta
router.route('/producto/:id').get(getProductById); //Ruta para consultar por id
router.route('/producto/:id').put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct); //Creación de la ruta de la actualización
router.route('/producto/:id').delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct); //Creación de la ruta de eliminación
>>>>>>> jules

router.route("/review").put(isAuthenticatedUser, createProductReview)
router.route("/reviews").get(isAuthenticatedUser, getProductReviews)
router.route("/review").delete(isAuthenticatedUser, deleteReview)

<<<<<<< HEAD
module.exports=router;
=======
module.exports = router;
>>>>>>> jules
