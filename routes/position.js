const express = require("express");
const router = express.Router();
const controller = require("../controllers/position");

router.get("/:categoryId", controller.getByCategoryId);
router.post("/", controller.create);
router.delete("/:id", controller.remove);
router.patch("/:id", controller.update);

module.exports = router;
