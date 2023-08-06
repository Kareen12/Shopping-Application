const Razorpay = require("razorpay");
const dotenv = require("dotenv").config();
console.log(process.env.RAZORPAY_KEY);
console.log(process.env.RAZORPAY_SECRET);
exports.instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
  });