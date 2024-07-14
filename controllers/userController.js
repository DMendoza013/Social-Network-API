const {user, thought } = require('../models');

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

},

async updateUser(req, res) {
    
},

async deleteUser(req, res) {

},



}