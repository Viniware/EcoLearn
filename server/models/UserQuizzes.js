const mongoose = require('mongoose');

const userQuizzesSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    quiz_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Quiz'
    },
    completon_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('UserQuizzes', userQuizzesSchema);
