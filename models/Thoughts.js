const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reactions");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timeStamp) => new Date(timeStamp).toLocaleString(),
    },
    username: { type: String, required: true },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function() {
    return this.reactions.length
})

const Thoughts = model('Thought', thoughtSchema)

module.exports = Thoughts;