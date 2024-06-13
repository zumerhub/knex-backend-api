const userModel = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        console.log('users', users);
        return res.json(users);
        } catch (error) {
        return res.status(500).json({errr: error.message});
    }
}

exports.creatUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const newUser = await userModel.createUser({name, email} );
        res.status(200).json(newUser);
    } catch (error) {
        return res.status(500).json({errr: error.message});
    }
}