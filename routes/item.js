const express = require("express");
const router = express.Router();
const ItemController = require("../controllers/item_controller");

router.get("/", ItemController.getAll);
router.get("/:id", ItemController.getOne);
router.post("/", ItemController.create);
router.put("/:id", ItemController.update);
router.delete("/:id", ItemController.delete);

module.exports = router;
