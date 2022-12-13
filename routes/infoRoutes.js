const express = require('express');
const router = express.Router()
const { getInfo, postInfo, editInfo, deleteInfo } = require("../controllers/infoControllers")
const { protect } = require("../middleware/authMiddleware")

router.get("/", protect, getInfo)
router.post("/", protect, postInfo)

router.put("/:id", protect, editInfo)
router.delete("/:id", protect, deleteInfo)

module.exports = router