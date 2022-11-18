const mongoose = require("mongoose");
const { Schema } = mongoose;

const cocktailSchema = new Schema(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

const Cocktail = mongoose.model("cocktails", cocktailSchema);
module.exports = Cocktail;
