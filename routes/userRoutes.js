const express = require("express");
const router = express.Router();
const { registerUser, loginUser, currentUser, getAlltUsers } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware")

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/currentUser", protect, currentUser);
router.get("/getAlltUsers", getAlltUsers);

module.exports = router;