const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  order: {
    type: Number,
    required: true,
  },
  list: [
    {
      name: { type: String },
      quantity: { type: Number },
      cost: { type: Number },
    },
  ],
  user: {
    ref: "",
    type: Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model("users", userSchema);
