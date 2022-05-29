const express = require("express");
const {
  newCart,
  getCart,
  deleteCartItem,
} = require("../controllers/cartController");
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/cart/new").post(isAuthenticatedUser, newCart);
// router.route("/cart/new").post(newCart);

router.route("/cart").get(isAuthenticatedUser, getCart);
// router.route("/cart/:id").get(getCart);

router.route("/cart/:id").delete(isAuthenticatedUser, deleteCartItem);
// router.route("/admin/cart/:id").delete(deleteOrder);

module.exports = router;
