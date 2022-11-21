const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thoughtController.js');

// /api/users
router.route('/').get(getThoughts).post(createThought);

// /api/users/:userId
router.route('/:userId').get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addReaction).delete(deleteReaction)

module.exports = router;