const express = require("express");
const connectDB = require("./controllers/connect");
const mongoose = require("mongoose");
const User = require("./models/User");
const AnimeData = require("./models/AnimeData");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

app.use(express.json());
app.use(cors());
const port = process.env.API_PORT;
connectDB();

app.post("/api/register", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.json({ status: "error", error: "User already exists" });
    }
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender,
      age: req.body.age,
      phone: req.body.phone,
      country: req.body.country,
      password: req.body.password,
    });
    await newUser.save();

    res.json({ status: "ok" });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "Server error" });
  }
  console.log(req.body);
});

app.post("/api/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (!user) {
      return res.json({ status: "error", error: "Invalid email or password" });
    } else {
      const token = jwt.sign(
        {
          name: user.name,
          email: user.email,
        },
        "sada9429ada9d2r9qafda"
      );
      res.json({ status: "ok", user: token });
    }
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "Server error" });
  }
  console.log(req.body);
});

app.get("/api/home", (req, res) => {
  const token = req.headers["x-access-token"];
  console.log(token);
  if (token === "null") {
    return res.status(401).json({ message: "Invalid" });
  }

  res.json({ message: "valid" });
});

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/api/anime_data", async (req, res) => {
  const result = await AnimeData.find();
  res.send({
    result,
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
