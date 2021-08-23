const express = require("express");
const router = express.Router();
const Razorpay = require("razorpay");
var razorpayInstance = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET,
});

router.get("/", (req, res) => {
  res.send("In payment router!");
});

router.post("/direct-checkout", (req, res) => {
  let productDetails = req.body;
  razorpayInstance.orders.create(
    {
      amount: productDetails.price * 100,
      currency: "INR",
      receipt: productDetails.id,
    },
    (err, order) => {
      if (err) return console.log(err);
      res.json(order);
    }
  );
});

module.exports = router;
