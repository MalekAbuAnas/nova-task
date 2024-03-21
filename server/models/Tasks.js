const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ["active", "completed"], default: "active" },
  createdBy: { type: Schema.Types.ObjectId, ref: "User" },
});

const Task = mongoose.model("tasks", taskSchema);
module.exports = Task;
