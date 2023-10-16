const mongoose = require("mongoose");
const chatModel = mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupchat: { type: Boolean, default: false },

    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

const chat = mongoose.model("chat", chatModel);

module.exports = chat;
