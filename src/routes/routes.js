const express = require("express");
const router = express.Router();
const watsAppController = require("../controllers/whatsappControllers");

router.get("/", watsAppController.verifyToken);
router.post("/", watsAppController.receivedMessage);

module.exports = router;
