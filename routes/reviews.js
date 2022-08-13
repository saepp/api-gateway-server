const express = require("express");
const router = express.Router();

const reviewsHandler = require("./handler/reviews");

router.post("/", reviewsHandler.create);
router.put("/:id", reviewsHandler.update);

module.exports = router;