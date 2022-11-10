const express=require("express");
const router=express.Router();

const { getItemsCart, newItemCart } = require("../controllers/myCartController");

router.route('/mycart').get(getItemsCart);
router.route('/itemcart').post(newItemCart);

module.exports = router