import mongoose, { Schema } from "mongoose";

const MessageSchema = new Schema({
  content: { type: String, required: true },
  users: [{ type: Schema.Types.ObjectId, ref: "User" }],
  time: { type: Date, default: Date.now() },
});

MessageSchema.virtual("url").get(function (this: { _id: string }) {
  return `/${this._id}`;
});

// module.exports = mongoose.model("Message", MessageSchema);

const Message =
  mongoose.models.Message || mongoose.model("Message", MessageSchema);

export default Message;
