const express = require("express");
const router = express.Router();

const { getItemsCart, newItemCart, getCountItems, deleteItem } = require("../controllers/myCartController");

router.route('/mycart').get(getItemsCart);
router.route('/itemcart').post(newItemCart);
router.route('/countitems').get(getCountItems);
router.route('/item/:id').delete(deleteItem)
module.exports = router