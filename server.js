const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
require("dotenv").config();

// routes
const paymentRoute = require("./routes/payment");
const productRoute = require("./routes/product");

// Middlewares
app.use(express.json({ extended: false }));
app.use("/api/payment", paymentRoute);
app.use("/api/product", productRoute);

app.listen(PORT, () => {
  console.log(`App is running on port http://localhost:${PORT}`);
});
