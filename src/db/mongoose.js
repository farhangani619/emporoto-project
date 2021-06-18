const mongoose = require("mongoose");

// connecting to mongodb database
mongoose.connect("mongodb://127.0.0.1:27017/user-management", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
