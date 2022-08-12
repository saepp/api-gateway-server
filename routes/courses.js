const express = require("express");
const router = express.Router();

const coursesHandler = require("./handler/courses");

router.post("/", coursesHandler.create);
router.put("/:id", coursesHandler.update);

module.exports = router;
