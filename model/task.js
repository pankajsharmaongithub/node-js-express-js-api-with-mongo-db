const mongoose = require("mongoose");

  const taskSchema = new mongoose.Schema({
    email: { type: String },
    task: { type: String },
    create_date: { type: String},
    update_date: { type: String},
    status: { type: Number, default: 0},
},{ collection: 'task' } );

module.exports = mongoose.model("task", taskSchema);