const User = require("../models/User");

// Get all users (admin)
exports.getUsers = async (req, res) => {

  const users = await User.find().select("-password");

  res.json(users);
};

// Promote user to admin
exports.promoteUser = async (req, res) => {

  const user = await User.findById(req.params.id);

  if (!user) return res.status(404).json({ message: "User not found" });

  user.role = "admin";

  await user.save();

  res.json({ message: "User promoted to admin" });
};

// Block user
exports.blockUser = async (req, res) => {

  const user = await User.findById(req.params.id);

  if (!user) return res.status(404).json({ message: "User not found" });

  user.isBlocked = true;

  await user.save();

  res.json({ message: "User blocked successfully" });
};