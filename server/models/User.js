const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    level: {
        type: Number,
        required: true,
    },
    role: {
        type: String,
        enum: ['client', 'admin'],
        required: true,
        default: 'client',
    }
})

module.exports = mongoose.model('User', userSchema);