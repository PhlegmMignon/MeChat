import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

UserSchema.virtual("url").get(function (this: { _id: string }) {
  return `/${this._id}`;
});

// module.exports = mongoose.model("User", UserSchema);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
