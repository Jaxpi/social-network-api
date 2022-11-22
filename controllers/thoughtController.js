const { Users, Thoughts } = require("../models");

module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    Thoughts.find()
      .populate({ path: "reactions", select: "-__v" })
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single thought
  getSingleThought(req, res) {
    Thoughts.findById(req.params.thoughtId)
      .populate({ path: "reactions", select: "-__v" })
      .select("-__v")
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new thought
  createThought(req, res) {
    Thoughts.create(
      req.body,
      { $addToSet: { thoughts: req.params.thoughtId } },
      { _id: req.body.userId },
      { $push: { thoughts: Thoughts._id } },
      { new: true }
    )
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
  // update a thought
  updateThought(req, res) {
    Thoughts.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true })
      .populate({ path: "reactions", select: "-__v" })
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
  // Delete a thought and associated apps
  deleteThought(req, res) {
    Thoughts.findByIdAndDelete(req.params.thoughtId)
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : Thoughts.deleteMany({ _id: { $in: thought.reactions } })
      )
      .then(() =>
        res.json({ message: "thought and associated reactions deleted!" })
      )
      .catch((err) => res.status(500).json(err));
  },
  // add a reaction
  addReaction(req, res) {
    Thoughts.findByIdAndUpdate(
      req.params.thoughtId,
      { $addToSet: { reactions: req.body } },
      { new: true }
    )
      .populate({ path: "reactions", select: "-__v" })
      .then((thoughtData) => {
        !thoughtData
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json(thoughtData);
      })
      .catch((err) => res.status(500).json(err));
  },
  // delete a reaction
  deleteReaction(req, res) {
    Thoughts.findByIdAndUpdate(
      req.params.thoughtId,
      { $pull: { reactions: req.params.reactionId } },
      { new: true }
    )
      .then((thoughtData) => {
        !thoughtData
          ? res.status(404).json({ message: "No reaction with that ID" })
          : res.json(thoughtData);
      })
      .catch((err) => res.status(500).json(err));
  },
};
