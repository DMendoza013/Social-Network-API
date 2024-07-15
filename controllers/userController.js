const { user, thought } = require('../models');

module.exports = {

async getUsers(req, res) {
    try {
        const users = await user.find().populate('user');
        res.json(users);
    } catch (err) {
        res.status(500).json(err);
    }
},

async getSingleUser(req, res) {
    try {
        const singleUser = await user.findOne({_id: req.params.userId}).populate('user');

        if (!singleUser) {
            return res.status(404).json({ message: 'no user with that ID' });
        }

    }catch(err){
        res.status(500).json(err);
    }
},

async createUser(req, res) {
    try {
        const newUser = user.create(req.body);
        res.json(body);
    }catch(err) {
        res.status(500).json(err);
    }
},

async updateUser(req, res) {
    try {
        const updateUser = await user.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new:true }
        );

    if (!updateUser){
        res.status(400).json({ message: 'No user with this ID'})
    }
    }catch(err) {
        res.status(500).json(err);
    } 
},

async deleteUser(req, res) {
    try {
        const deleteUser = await user.findOneAndRemove({ _id: req.params.userId});

        if (!deleteUser) {
            res.status(404).json({ message: 'No user with this ID'})
        }

        res.json({ message: 'User has been deleted' });
    } catch(err) {
        res.status(500).json(err);
    }
},

};