const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  item: { type: String, required: true },
  amount: { type: Number, required: true },
  subtotal: { type: Number, default: 0 },
  quantity: { type: Number, required: true },
});

const userModel =
  mongoose.models.user_tbs || mongoose.model("user_tbs", userSchema);

module.exports = userModel;
