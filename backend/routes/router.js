const express = require("express");
const { registerUser } = require("../controller/userRegisterController");
const { loginUser } = require("../controller/userLoginController");
const { homeRouter } = require("../controller/homeController");
const { animeData } = require("../controller/animeDataController");
const route = express.Router();

route.post("/api/register", registerUser);
route.post("/api/login", loginUser);
route.get("/api/home", homeRouter);
route.get("/api/anime_data", animeData);
route.get("/", (req, res) => res.send("Hello World!"));

module.exports = route;
