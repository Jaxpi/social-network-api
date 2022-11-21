const { Users, Thoughts } = require('../models');

module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    Thoughts.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single thought
  getSingleThought(req, res) {
    Thoughts.findById(req.params.thoughtId)
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
//   // create a new thought
  createThought(req, res) {
    Thoughts.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },

  updateThought(req, res) {
    Thoughts.findByIdAndUpdate(req.params.thoughtId, req.body, {new: true})
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },

//   // Delete a thought and associated apps
  deleteThought(req, res) {
    Thoughts.findByIdAndDelete(req.params.thoughtId)
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : Thoughts.deleteMany({ _id: { $in: thought.reactions } })
      )
      .then(() => res.json({ message: 'thought and associated reactions deleted!' }))
      .catch((err) => res.status(500).json(err));
  },

  addReaction(req, res) {
    Thoughts.findByIdAndUpdate(req.params.thoughtId, {$addToSet: {reactions: req.params.reactionId}}, {new: true})
    .then((thoughtData) => {
        !thoughtData
            ? res.status(404).json({message: "No thought with that ID"})
            : res.json(thoughtData)
    })
    .catch((err) => res.status(500).json(err));
  },
  deleteReaction(req, res) {
    Thoughts.findByIdAndUpdate(req.params.thoughtId, {$pull: {reactions: req.params.reactionId}}, {new: true})
    .then((thoughtData) => {
        !thoughtData
            ? res.status(404).json({message: "No reaction with that ID"})
            : res.json(thoughtData)
    })
    .catch((err) => res.status(500).json(err));
  }
};