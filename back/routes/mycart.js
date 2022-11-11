const express = require("express");
const router = express.Router();

const { getItemsCart, newItemCart, getCountItems } = require("../controllers/myCartController");

router.route('/mycart').get(getItemsCart);
router.route('/itemcart').post(newItemCart);
router.route('/countitems').get(getCountItems);

module.exports = router