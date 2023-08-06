const express = require("express");
const paymentRoutes = require("./routes/paymentRoutes"); 
const cors = require("cors");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
const database = require("./config/database.js");

database.connect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded( { extended: true } ));
app.use("/api/", paymentRoutes)


app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`);
});

app.get("/api/getKey", (req, res) => {
	res.status(200).json({
        key: process.env.RAZORPAY_KEY,
    })
})