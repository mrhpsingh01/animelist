const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://user:password321@cluster0.lpvzjab.mongodb.net/",
      {
        useNewUrlParser: true,
      }
    );
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);

    process.exit(1);
  }
};

module.exports = connectDB;
