const express=require("express");
const router=express.Router();
const { newOrder, 
    getOneOrder, 
    myOrders, 
    allOrders,
<<<<<<< HEAD
    updateOrder,
=======
    updateOrders,
>>>>>>> jules
    deleteOrder
} = require("../controllers/orderController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/order/new").post(isAuthenticatedUser, newOrder)
router.route("/order/:id").get(isAuthenticatedUser, getOneOrder)
router.route("/orders/me").get(isAuthenticatedUser, myOrders)


<<<<<<< HEAD
//rutas de admin
router.route("/admin/orders").get(isAuthenticatedUser, authorizeRoles("admin"), allOrders)
router.route("/admin/order/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder)
router.route("/admin/order/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder)


=======
//rutas de administración
router.route("/admin/orders").get(isAuthenticatedUser, authorizeRoles("admin"), allOrders)
router.route("/admin/order/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateOrders)
router.route("/admin/order/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder)

>>>>>>> jules
module.exports=router;