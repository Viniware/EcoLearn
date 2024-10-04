const express = require('express');
const UserQuizzes = require('../models/UserQuizzes');

const router = express.Router();

router.post('/', async (req, res) => {
    const { user_id, quiz_id } = req.body;

    try {
        const userQuiz = new UserQuizzes({
            user_id,
            quiz_id
        });

        await userQuiz.save();
        res.status(201).json({ message: 'Quiz registered as complete sucessfully!', userQuiz });
    } catch (err) {
        res.status(500).json({ message: 'Error when registering quiz as completed.', error: err.message });
    }
});

router.get('/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const completedQuizzes = await UserQuizzes.find({ user_id: userId }).populate('quiz_id');
        res.status(200).json(completedQuizzes);
    } catch (err) {
        res.status(500).json({message: 'Erro when fetching completed quizzes.', error: err.message });
    }
});

module.exports = router;