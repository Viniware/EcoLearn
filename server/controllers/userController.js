const User = require('../models/User');

exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    // Logic to register the user
}

exports.login = async (req, res) => {
    const { email, password } = req.body;

    // Logic to authenticate the user
};

exports.editProfile = async (req, res) => {
    const { id, newData } = req.body
    
    // Logic to edit the user's profile
}