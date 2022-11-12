const express=require("express");
const router=express.Router();
const { newOrder, 
    getOneOrder, 
    myOrders, 
    allOrders,
    updateOrders,
    deleteOrder
} = require("../controllers/orderController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/order/new").post(isAuthenticatedUser, newOrder)
router.route("/order/:id").get(isAuthenticatedUser, getOneOrder)
router.route("/orders/me").get(isAuthenticatedUser, myOrders)


//rutas de administración
router.route("/admin/orders").get(isAuthenticatedUser, authorizeRoles("admin"), allOrders)
router.route("/admin/order/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateOrders)
router.route("/admin/order/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder)

module.exports=router;