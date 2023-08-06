const express = require('express');
const router = express.Router();
const { checkout } = require("../controllers/paymentController")
const { paymentVerification } = require("../controllers/paymentController")



// router.route("/checkout").post(checkout);
router.post("/checkout", checkout);
router.post("/paymentVerification", paymentVerification);

module.exports = router 