if (process.env.NODE_ENV !== "production") require("dotenv").config();
console.log('masuk')
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const router = require("./routers");
const errorHandler = require("./middlewares/errorHandler");
const cors = require("cors");

app.options('*', cors())
//app.use(cors({origin: "https://ip-farachdiba.vercel.app", optionsSuccessStatus: 200}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);
app.use(errorHandler);

app.listen(port, () => {
  console.log("Listening on PORT", port);
});

module.exports = app;
