const express = require("express");
const router = express.Router();
const controller = require("../controllers/auth");

//localhost:5050/api/auth/login
router.get("/login", controller.login);
router.get("/register", controller.register);

module.exports = router;
