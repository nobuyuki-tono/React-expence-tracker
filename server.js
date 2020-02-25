const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");

const transactions = require("./routes/transactions");

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(express.json());

app.use("/api/v1/transactions", transactions);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on PORT ${PORT}`));