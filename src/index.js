const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user-route");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
  console.log("server is up and running");
});
