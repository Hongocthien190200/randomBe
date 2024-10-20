const router = require("express").Router();
const textsController = require("../controllers/textsController");

router.get("/text",textsController.show);
router.post("/text", textsController.create);
router.delete("/text/:id", textsController.delete);

module.exports = router;
