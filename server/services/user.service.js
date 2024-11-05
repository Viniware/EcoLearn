const User = require('../models/user.model');

const createUser = async (userData) => {
    const newUser = await User.create(userData);
    return newUser;
};

const getAllUsers = async () => {
    const users = await User.findAll();
    return users;
};

const getUserById = async (id) => {
    const user = await User.findByPk(id);
    return user;
}

const updateUser = async (id, userData) => {
    const [updated] = await User.update(userData, { where: { id }});
    return updated;
};

const deletedUser = async (id) => {
    const deleted = await User.destroy({ where: {id} });
    return deleted;
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deletedUser
};