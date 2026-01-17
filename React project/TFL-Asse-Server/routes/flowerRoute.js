const express = require("express");
const router = express.Router();
const controller = require("../controller/flowercollecter")


router.get("/Flowers", controller.getAllFlowers);

module.export = router;