const userService = require('../services/user.service');

const createUser = async (req, res) => {
    try {
        const { name, email, password, level, role } = req.body;

        const newUser = await userService.createUser({
            name,
            email,
            password,
            level,
            role
        });

        return res.status(201).json({
            message: 'User created successfully',
            user: newUser
        });

    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({
            message: 'An error occurred while creating the user',
            error: error.message
        });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        return res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        return res.status(500).json({
            message: 'An error ocurred while fetching users',
            error: error.message
        });
    }
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userService.getUserById(id);

        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        return res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        return res.status(500).json({
            message: 'An error occurred while fetching the user',
            error: error.message
        });
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password, level, role } = req.body;

        const [updated] = await userService.updateUser(
            { name, email, password, level, role},
            {
                where: { id}
            }
        );

        if (!updated) {
            return res.status(404).json({
                message: 'User not found or no changes made'
            });
        }

        const updatedUser = await userService.getUserById(id);
        return res.status(200).json({
            message: 'User updated successfully',
            user: updatedUser
        });
    } catch (error) {
        console.error('Error updating user:', error);
        return res.status(500).json({
            message: 'An error ocurred while updating the user',
            error: error.message
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const deleted = await userService.deleteUser(id);

        if (!deleted) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        return res.status(204).json();
    } catch (error) {
        console.error('Error deleting user:', error);
        return res.status(500).json({
            message: 'An error ocurred while deleting the user',
            error: error.message
        });
    }
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};