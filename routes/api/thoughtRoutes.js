const router = require('express').Router();

const {
    getThoughts,
    getSingleTought,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thoughtController.js')

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
.route('/:thoughtId')
.get(getSingleTought)
.put(updateThought)
.delete(deleteThought);

module.exports = router;