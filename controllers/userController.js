const User = require("../models/User");

exports.getUsers = async (req, res) => {

  const users = await User.find().select("-password");

  res.json(users);
};

exports.promoteUser = async (req, res) => {

  const user = await User.findById(req.params.id);

  if (!user) return res.status(404).json({ message: "User not found" });

  user.role = "admin";

  await user.save();

  res.json({ message: "User promoted to admin" });
};

exports.blockUser = async (req, res) => {

  const user = await User.findById(req.params.id);

  if (!user) return res.status(404).json({ message: "User not found" });

  user.isBlocked = true;

  await user.save();

  res.json({ message: "User blocked successfully" });
};