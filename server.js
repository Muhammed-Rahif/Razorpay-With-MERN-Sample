const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
require("dotenv").config();

// routes
const paymentRoute = require("./routes/payment");
const productRoute = require("./routes/product");

// Middlewares
app.use(express.json({ extended: false }));
app.use("/api/payment", paymentRoute);
app.use("/api/product", productRoute);
app.use(express.static(path.join(__dirname, "client", "build")));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`App is running on port http://localhost:${PORT}`);
});
