const express = require("express");
const router = express.Router();
const checkToken = require("../middlewares/verifyToken")


const {
    getFleets, postFleets, showFleet, editFleet, updateFleet, deleteFleet,
} = require("../controllers/itemsController")

// fleet routes
router.get("/", checkToken, getFleets);
router.post("/", postFleets);
router.get("/:id", showFleet);
router.get("/:id/edit", editFleet);
router.put("/:id", updateFleet);
router.delete("/delete/:id", deleteFleet);

module.exports = router;
