const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const adminRouter = require("./src/routers/admin");
const donateRouter = require("./src/routers/donate");
const angelRouter = require("./src/routers/angel");


mongoose.connect(process.env.MONGO_URL);

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/admin', adminRouter)
app.use("/api/donate", donateRouter);
app.use('/api/angel', angelRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server started http://localhost:${process.env.PORT}`);
});