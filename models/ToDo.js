const mongoose = require('mongoose');
const statuses = ['new','in progress','complete'];
const priorities = ['high','medium','low'];

const todoSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  text : String,
  description: String,
  dueDate: Date,
  status: {type: String, enum: statuses},
  priority: {type: String, enum: priorities},
  assignedTo: String,
  createdBy: String

}, { timestamps: true });


const ToDo = mongoose.model('ToDo', todoSchema);

module.exports = ToDo;