const { instance } = require("../config/razorpayInstance");
const crypto = require("crypto");
const { Payment }  = require( "../models/PaymentModels");
const dotenv = require("dotenv");


exports.checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.totalAmount * 100),
    currency: "INR",
  };
  const order = await instance.orders.create(options);
  console.log("key is" ,process.env.RAZORPAY_KEY);
  console.log(process.env.RAZORPAY_SECRET);

  res.status(200).json({
    success: true,
    order,
  });
};




exports.paymentVerification = async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;
  
    const body = razorpay_order_id + "|" + razorpay_payment_id;
  
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(body.toString())
      .digest("hex");
  
    const isAuthentic = expectedSignature === razorpay_signature;
  
    if (isAuthentic) {
      // Database comes here
  
      await Payment.create({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      });
  
      res.redirect(
        `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
      );
    } else {
      res.status(200).json({
        success: ture,
        message: 'Payment successful'
      });
    }
  };
  