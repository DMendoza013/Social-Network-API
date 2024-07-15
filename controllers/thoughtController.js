const { user, thought } = require('../models');

module.exports = {
    async getThoughts(req, res) {
        try {
            const thoughts = await thought.find();
            res.json(thoughts);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    async getSingleTought(req, res) {
        try {
            const singleTought = await thought.findOne({ _id: req.parmas.thoughtId }).populate('thought')
            if (!singleTought) {
                return res.status(404).json({ message: 'no thought with that ID' });
              }
        } catch(err) {
            res.status(500).json(err);
        }
    },

    async createThought(req, res) {

    },

    async updateThought(req, res) {
        try {
            const userUpdate = await user.findOneAndUpdate(
                { _id: req.parmas.userId },
                { $addToSet: { thoughts: req.body } },
                {runValidators: true, new: true }
            );

            if(!userUpdate) {
                return res.status(404).json( { message: "No user with that ID"});
            }

            res.json(userUpdate);
        }catch(err) {
            res.status(500).json(err);
        }
    },

    async deleteThought(req, res) {
        try {
            const deleteThought = await thought.findOneAndDelete({ _id: req.parmas.thoughtId });

            if(!deleteThought) {
                res.status(404).json({ message: 'no thought with that ID'});
            }

            await thought.deleteMany( { $in: deleteThought.thoughtText });
            res.json({ message: 'thought has been deleted'});
        } catch(err) {
            res.status(500).json(err);
        }
    }

};