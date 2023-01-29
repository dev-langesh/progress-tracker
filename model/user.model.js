import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    completed: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "task",
      },
    ],
  },
  {
    collection: "Users",
  }
);

export const User = mongoose.models.user || mongoose.model("user", schema);
