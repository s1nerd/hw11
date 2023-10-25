const express = require("express");
const router = express.Router();
const itemRouter = require("./item");

router.use("/items", itemRouter);

module.exports = router;
