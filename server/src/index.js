const express = require("express");
const cors = require("cors");
const connectToDB = require("../config/db");
const productRouter = require("./routers/product.router");
const app = express();
app.use(express.json());
app.use(cors());
//* Connect to DB
connectToDB();

app.use("/products", productRouter);

const PORT = process.env.PORT || 3008;

app.listen(PORT, () => {
  console.log(`Server Connected on Port ${PORT}`);
});
