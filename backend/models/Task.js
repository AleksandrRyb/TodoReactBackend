const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        trim: true,
        required: "Please enter the description!"
    },
    importance: {
        type: String,
        trim: true,
        required: 'Please enter the importance level!'
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    date: Date
})

module.exports = mongoose.model('Task', taskSchema);