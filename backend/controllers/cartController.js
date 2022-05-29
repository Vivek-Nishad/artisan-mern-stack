const Cart = require("../models/cartModel");
const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Create new cart
exports.newCart = catchAsyncErrors(async (req, res, next) => {
  // const { product, name, price, image, stock, quantity, user } = req.body;
  const { product, name, price, image, stock, quantity } = req.body;
  console.log("new cart req body--> ", req.body);

  const findCartQuery = {
    product,
    user: req.user._id,
  };
  const cartItemExist = await Cart.findOne(findCartQuery);

  console.log("cartItemExist-----> ", cartItemExist);

  if (cartItemExist) {
    const cart = await Cart.findOneAndUpdate(findCartQuery, { quantity });
    console.log("updated cart--> ", cart);

    res.status(201).json({
      success: true,
      cart,
    });
  } else {
    const cart = await Cart.create({
      product,
      name,
      price,
      image,
      stock,
      quantity,
      // user: user,
      user: req.user._id,
    });

    console.log("created cart--> ", cart);

    res.status(201).json({
      success: true,
      cart,
    });
  }
});

// get Single Order
exports.getCart = catchAsyncErrors(async (req, res, next) => {
  // const cart = await Cart.findById(req.params.id).populate(
  //   "user",
  //   "name email"
  // );

  // console.log("get cart req ---> ", req.user);

  const cart = await Cart.find({ user: req.user._id }).populate(
    "user",
    "name email"
  );

  // console.log("get cart resp--> ", cart);

  if (!cart) {
    return next(new ErrorHander("cart not found with this Id", 404));
  }

  res.status(200).json({
    success: true,
    cart,
  });
});

// delete Order -- Admin
exports.deleteCartItem = catchAsyncErrors(async (req, res, next) => {
  const query = {
    user: req.user._id,
    product: req.params.id,
  };
  console.log("Wassup");
  const cart = await Cart.findOne(query);
  console.log("delete cart req params--> ", req.params);
  console.log("cart del ", cart);

  if (!cart) {
    return next(new ErrorHander("cart not found with this Id", 404));
  }

  await cart
    .remove()
    .then((suck) => console.log("del suck--> ", suck))
    .catch((err) => console.log("del err--> ", err));

  res.status(200).json({
    success: true,
    cart,
  });
});
