const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: { type: String, required: true },
    favoriteCocktails: [{ type: Schema.ObjectId, ref: "cocktails" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
