const mongoose = require("mongoose");
const { Schema } = mongoose;

const TextSchema = new Schema(
  {
    textname: { type: String, required: true },
  },
  {
    timestamps: {
      currentTime: () => new Date(Date.now() + 7 * 60 * 60 * 1000), // Đặt múi giờ +7
    },
  }
);

module.exports = mongoose.model("Texts", TextSchema);
