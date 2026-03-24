const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const checkRole = require("../middleware/roleMiddleware");

const {
  getUsers,
  promoteUser,
  blockUser
} = require("../controllers/userController");

// Admin only
router.get("/", auth, checkRole("admin"), getUsers);

router.patch("/promote/:id", auth, checkRole("admin"), promoteUser);

router.patch("/block/:id", auth, checkRole("admin"), blockUser);

module.exports = router;